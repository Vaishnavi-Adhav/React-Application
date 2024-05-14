import './css/App.css';
import Header from './Header';
import Main from "./Main";
import {useState} from "react";
import Footer from "./Footer";
import './css/darkmode.css';
import SkipLink from "./SkipLink";


function App() {

    const [page, setPage] = useState('Home');
    const [theme, setTheme] = useState('light');

    function onNav(event) {
        debugger
        const target = event.target.dataset.target;
        if (target) {
            debugger
            event.preventDefault();
            setPage(target);
        }
    }

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <div className={`app ${theme}`}>
            <SkipLink />
            <Header onNav={onNav} toggleTheme={toggleTheme}/>
            <Main  onNav={onNav} page={page}/>
            <Footer onNav={onNav}/>
        </div>
    );
}

export default App;