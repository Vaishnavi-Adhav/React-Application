import menuItems from './menuItems';
import "./css/navbar.css";
import MenuItems from "./MenuItems.jsx";
import {useState} from "react";

function Navbar({className, onNav}) {

    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    const setInActiveClass = navbarOpen ? "menus" : "menus inactive";

    return (
        <nav className="navbar">
            <button className="dropdown-button" onClick={handleToggle}>{navbarOpen ? "" : ""}
                <i aria-label="Clickable dropdown menu icon" className="gg-menu"></i></button>
            <ul className={setInActiveClass}>
                {menuItems.map((menu) => {
                    return <MenuItems items={menu} onNav={onNav} closeMenu={closeMenu}/>;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;