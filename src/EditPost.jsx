import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const EditPost = (
    {
        posts, 
        setEditTitle, 
        setEditBody, 
        handleEdit,
        editTitle,
        editBody
    }) => {
    const {id} = useParams();
    const post = posts.find(post => (
        post.id.toString() === id
    ))

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post])
    return (
        <main>
           {
            (post) ? (
                <form onSubmit = {(e) => {
                    e.preventDefault();
                    handleEdit(post.id);
                    console.log('form submitted')
                }} className="edit-post-form">
                    <label className = 'edit-title-label' htmlFor="edit-title">Edit Title</label>
                    <input 
                        className="post-title"
                        type="text"
                        placeholder="Enter your updated title"
                        value = {editTitle}
                        id = 'edit-title'
                        onChange= {(e) => {
                            setEditTitle(e.target.value)
                        }}
                    
                    />
                    <label className = 'edit-body-label' htmlFor="edit-body">Edit Body</label>
                    <textarea 
                        className="edit-post-body"
                        type="text" 
                        placeholder="Enter your updated description"
                        value = {editBody}
                        onChange={(e) => {
                            setEditBody(e.target.value)
                        }}
                    />
                    <input 
                        className="edit-post-submit"
                        type="submit" 
                        value = 'update'
                    />
                </form>
            ):
            (
                <div className="post-not-found">
                    <div className="whoops">Whoops!!! &#129393; </div>
                    <div className="not-found">
                        Post is not found
                    </div>
                    <div className="disappoint">Well!!! That's disappointing</div>  
                    <Link to = '/'>
                        <input 
                        type="button"
                        className="home-page-button"
                        value = 'Home Page'
                    />
                    </Link>
                </div>

            )
           }
        </main>
    )
}

export default EditPost;