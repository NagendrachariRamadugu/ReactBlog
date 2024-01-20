const NewPost = ({title, setTitle, body, setBody, handleSubmit}) => {
    return (
        <main>
            <form onSubmit = {(e) => {
                e.preventDefault();
                handleSubmit();
            }} className="post-form">
                <label className = 'title-label' htmlFor="title">Title</label>
                <input 
                    className="post-title"
                    type="text"
                    value = {title}
                    id = 'title'
                    placeholder="Enter Title"
                    onChange= {(e) => {
                        setTitle(e.target.value)
                    }}
                
                />
                <label className = 'body-label' htmlFor="body">Body</label>
                <textarea 
                    className="post-body"
                    type="text" 
                    placeholder="Enter body description"
                    id = 'body'
                    value = {body}
                    onChange={(e) => {
                        setBody(e.target.value)
                    }}
                />
                <input 
                    className="post-submit"
                    type="submit" 
                    value = 'Submit'
                />
            </form>
        </main>
    )
}

export default NewPost;