import './css/clients.css';
import data from './images';
import {useState} from "react";
import Modal from "./Modal";

function OurClients(){

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const manageClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.link);
    };

    const manageRotationRight = () => {
        const totalLength = data.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = data[0].link;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.filter((item) => {
            return data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };
    const manageRotationLeft = () => {
        const totalLength = data.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = data[totalLength - 1].link;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.filter((item) => {
            return data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };
    return (
        <div className="gallery-heading">
            <h2>Our Clients</h2>
            <div className="main-gallery">
                {data.map((item, index) => (
                    <div key={index} className="main-gallery-images">
                        <img className="client-img"
                            src={item.link}
                            alt={item.text}
                            onClick={() => manageClick(item, index)}
                        />
                        <h2>{item.text}</h2>
                    </div>
                ))}
                <div>
                    {clickedImg && (
                        <Modal
                            clickedImg={clickedImg}
                            manageRotationRight={manageRotationRight}
                            setClickedImg={setClickedImg}
                            manageRotationLeft={manageRotationLeft}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default OurClients;