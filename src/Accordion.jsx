import React, { useState } from 'react';
import './css/accordion.css';

function Accordion({ title, content }){
    const [isButtonActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isButtonActive)}>
                <div>{title}</div>
                <div><button className="accordion-button">{isButtonActive ? '-' : '+'}</button></div>
            </div>
            {isButtonActive && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default Accordion;