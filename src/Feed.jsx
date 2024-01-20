import Post from './Post.jsx';

const Feed = ({posts}) => {
    return (
        <>
            {
                posts.map(post =>(
                    <Post post = {post} key = {post.id}/>
                ))
            }
        </>
    )
}

export default Feed;