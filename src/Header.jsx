import Navbar from './Navbar';
import "./css/header.css";

function Header({onNav,toggleTheme}) {

    return (
        <header className="topnav">
            <div className="nav-area">
                <a href="/" ><img alt="website logo" className="headerimage" src={require("./images/logo.jpg")}/>
                </a>
                <h1>Technology School</h1>
                <Navbar onNav={onNav}/>
                <button className="theme-button" onClick={toggleTheme} aria-label="change theme">Change Theme</button>
            </div>
        </header>
    );
};

export default Header;