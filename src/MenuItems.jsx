import Dropdown from './Dropdown';
import {useState} from "react";

const MenuItems = ({items, onNav, closeMenu}) => {

    const [dropdown, setDropdown] = useState(false);
    return (
        <li className="menu-items" key={items.title}>
            {items.submenu ? (
                <>
                    <button type="button" aria-label="menu" dropdown-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropdown((prev) => !prev)}>
                        {items.title}{' '}
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} onNav={onNav}/>
                </>
            ) : (
                <a onClick={onNav} href="{items.url}" data-target={items.title}>{items.title}</a>
            )}
        </li>
    );
};

export default MenuItems;