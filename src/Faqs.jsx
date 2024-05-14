import React from 'react';
import Accordion from './Accordion';
import accordionData from "./accordionData";
import "./css/faq.css";

function Faqs() {
    return (
        <div>
            <h2>Frequently Asked Questions(FAQ)</h2>

            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </div>
    );
};

export default Faqs;