import './css/submittedform.css';
import submitForm from "./sumittedCourseForm";

function SubmittedForm({onNav}) {

    const registerlink = submitForm.map(submitForm => {
        return (
            <a className="back-button" onClick={onNav} key={submitForm.title} href={submitForm.url}
               data-target={submitForm.title}>Back to Home</a>
        );
    });

    return (
        <div className="submit-form">
            <div className="register-success-text"><h3>You are successfully registered for this course !!</h3></div>
            <div className="regsiter-link">{registerlink}</div>
        </div>
    );
}

export default SubmittedForm;