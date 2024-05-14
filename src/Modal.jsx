import './css/modal.css';

const Modal = ({
                   clickedImg, setClickedImg, manageRotationRight, manageRotationLeft
               }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
        }
    };

    return (<>
        <div className="overlay dismiss" onClick={handleClick}>
            <img src={clickedImg} alt="clicked pic"/>
            <span className="dismiss" onClick={handleClick}>
          X
        </span>
            <div onClick={manageRotationLeft}>
                <div>
                    <button className="gallery-button-left" type='button'>Prev</button>
                </div>
            </div>
            <div onClick={manageRotationRight}>
                <div>
                    <button className="gallery-button-right" type="button">Next</button>
                </div>
            </div>
        </div>
    </>);
};

export default Modal;