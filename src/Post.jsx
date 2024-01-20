import { Link } from "react-router-dom";

const Post = ({post}) => {
    return (
        <article>
            <Link className = 'body-link' to = {`post/${post.id}`}>
                <p style = {{
                    padding: '0rem 0rem 1rem 0rem'
                }}><b>{post.title}</b></p>
                <p style = {{
                    padding: '0rem 0rem 0.5rem 0rem'
                }}>{post.datetime}</p>
            </Link>
            <p style = {{
                padding: '0rem 0rem 0.5rem 0rem'
            }}>
            {
                (post.body.length <= 25)?
                (post.body):
                (`${post.body.slice(0, 25)}...`)
            }
            </p>
        </article>
    )
}

export default Post;