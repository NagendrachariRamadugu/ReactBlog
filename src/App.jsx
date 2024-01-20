import { useEffect, useState } from 'react'
import './App.css'
import Layout from './Layout'
import Home from './Home'
import { Routes, Route, useNavigate } from 'react-router-dom';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About.jsx';
import Missing from './Missing.jsx';
import axios from './axios.jsx';
import EditPost from './EditPost.jsx';
import {format} from 'date-fns';
import useWindowSize from './useWindowSize.jsx';

function App() {

  const {width} = useWindowSize();

  const navigate = useNavigate();

  const [filteredPosts, setFilteredPosts] = useState('');

  const [search, setSearch] = useState('');

  const [title ,setTitle] = useState('');

  const [body, setBody] = useState('');

  const [posts, setPosts] = useState([]);

  const [editTitle, setEditTitle] = useState('');

  const [editBody, setEditBody] = useState('');


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('/posts');
        setPosts(response.data);
      }
      catch (err) {
        if(response.data) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }

        else {
          console.log(`The Error has occured: ${err.message}`)
        }
      }
    }
    fetchItems();
  }, [])


  useEffect(() => {
    const filteredResults = posts.filter(post => (
      (post.title.toLowerCase()).includes(search.toLowerCase())||
      (post.body.toLowerCase()).includes(search.toLowerCase())
    ))
    setFilteredPosts(filteredResults.reverse())
  }, [posts, search])


  const handleSubmit = async () => {
    const id = 
      (posts.length)
      ?((posts[posts.length - 1].id) + 1 )
      :(1)
    
    const datetime = format(new Date(), 'MM dd, yyy/ pp');
    const newPost = {id, title, body, datetime}
    const response = await axios.post('/posts', newPost)
    setPosts([...posts, newPost])
    setTitle('')
    setBody('');
    navigate('/');
  }

  const handleDelete = async (id) => {
    await axios.delete(`/posts/${id}`);
    setPosts(posts.filter(post => (
      post.id !== id
    )))
    navigate('/');
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MM dd, yyyy / pp');
    const updatedPost = {id, title: editTitle, body: editBody, datetime}
    const response = await axios.put(`/posts/${id}`, updatedPost);
    const updatedPosts = posts.map(post => (
      (id === post.id)?
        (response.data):
        (post)
    ))
    setPosts(updatedPosts);
    setEditTitle('');
    setEditBody('');
    navigate('/');
  }

  return (
    <Routes>
      <Route path = '/' element = {<Layout 
          search = {search}
          width = {width}
          setSearch = {setSearch}
      />}>
        <Route index element = {<Home
          posts = {filteredPosts} 
          setPosts = {setPosts}
        />}/>
        <Route path = 'post'>
          <Route index element = {<NewPost
            title = {title}
            setTitle = {setTitle}
            body = {body}
            setBody = {setBody}
            handleSubmit = {handleSubmit}
          />}/>
          <Route path = ':id' element = {<PostPage
            posts = {posts}
            handleDelete = {handleDelete}
            handleEdit={handleEdit}
          />}/>
        </Route>
        <Route path = 'editPost/:id' element = {<EditPost
          posts = {posts}
          setEditTitle = {setEditTitle}
          setEditBody = {setEditBody}
          handleEdit={handleEdit}
          editBody={editBody}
          editTitle={editTitle}
        />}/>
        <Route path = 'about' element = {<About/>}/>
        <Route path = '*' element = {<Missing/>}/>
      </Route>
    </Routes>
  )
}

export default App
