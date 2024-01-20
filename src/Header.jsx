import { FaMobileAlt } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";


const Header = ({title, width}) => {
    return (
        <header>
           <section>{title}</section>
           <section>
                {
                    (width < 768) ?
                        (<FaMobileAlt/>):
                        (width < 992)? 
                            (<FaTabletAlt/>):
                            (<FaDesktop/>)
                }
           </section>
        </header>
    )
}

export default Header;