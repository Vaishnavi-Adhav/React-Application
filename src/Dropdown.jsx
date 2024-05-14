import './css/dropdown.css';

function Dropdown({ submenus, dropdown ,onNav}) {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={submenu.title} className="menu-items">
                    <a onClick={onNav} href="{submenu.url}" data-target={submenu.title}>{submenu.title}</a>
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;