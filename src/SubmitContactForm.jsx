import './css/submitcontactform.css';
import submitForm from "./sumittedCourseForm";
function SubmitContactForm({onNav}) {

    const registerlink = submitForm.map(submitForm => {
        return (
            <a className="back-contact-button" onClick={onNav} key={submitForm.title} href={submitForm.url} data-target={submitForm.title}>Back to Home</a>
        );
    });

    return (
        <div className="submit-contact-form">
            <div className="contact-success-text"><h3>Your query has been sent successfully !!</h3></div>
            <div>{registerlink}</div>
        </div>
    );
}
export default SubmitContactForm;