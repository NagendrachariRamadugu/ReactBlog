import Feed from './Feed.jsx';
import { Link } from "react-router-dom";

const Home = ({posts, setPosts}) => {
    return (
        <main>

            {
                (posts)?
                (
                    <Feed posts = {posts}/>
                ):
                (
                    <p style = {{
                        padding: '2rem',
                        textAlign: 'center'

                    }}>No Posts to display</p>
                )

            }

        </main>
    )
}

export default Home;