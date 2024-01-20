import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PostPage = ({posts, handleDelete, handleEdit}) => {
    const {id} = useParams();
    const post = posts.find(post => (
        (post.id).toString() === id
    ))

    return (
        <main className = {(!post)?('post-not-found-main'): ''}>
           {
             (post) && (
                <>
                    <div className = 'post-found'>
                        <div className = 'title'>{post.title}</div>
                       
                        <div className="body">{post.body}</div>
                        
                        <div className="datetime">{post.datetime}</div>
                        
                        <div className="handle-buttons-post-page">
                            <button 
                                className="delete-button"
                                onClick = {() => {
                                    handleDelete(post.id)

                                }}
                            >
                                DELETE
                            </button>
                            <Link to = {`../../editPost/${post.id}`}><button 
                                
                                className="edit-button"
                            >
                                EDIT
                            </button></Link>
                        </div>
                    </div>
                    
                </>
            )
           }

           {
            (!post) && (
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

export default PostPage;