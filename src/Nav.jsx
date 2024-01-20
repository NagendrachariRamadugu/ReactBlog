import { Link } from "react-router-dom";

const Nav = ({search, setSearch}) => {
    return (
        <nav>
            <form className = 'nav-form'>
                <label className = 'search-label' htmlFor="search">Search Posts</label>
                <input 
                    className="search-input"
                    type="text"
                    placeholder="Search"
                    value ={search}
                    id = 'search'
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                />
            </form>
            <ul>
                <li><Link className="nav-link" to ='/'>Home</Link></li>
                <li><Link className="nav-link" to = 'post'>Post</Link></li>
                <li><Link className="nav-link" to = 'about'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;