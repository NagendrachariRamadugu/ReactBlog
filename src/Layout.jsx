import {Outlet} from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({search, setSearch, width}) => {
    return (
        <>
            <Header 
                title = 'React Js Blog'
                width = {width}
            />
            <Nav 
                search={search}
                 setSearch={setSearch}
            />
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;