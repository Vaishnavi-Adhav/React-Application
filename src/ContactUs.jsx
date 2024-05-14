import './css/contactus.css';
import {useState} from "react";
import SubmitContactForm from "./SubmitContactForm";

function ContactUs({onNav}) {

    const [contactFormData, setFormData] = useState({
        email: '', text: '',
    })

    const [contactFormError, setContactFormError] = useState({});
    const [openContactMsg, setContactMsg] = useState(false);
    const [contactForm, setContactForm] = useState(true);

    const onChangeHandler = (event) => {
        setFormData(() => ({
            ...contactFormData, [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        let error = {}

        if (contactFormData.email === '') {
            error.email = 'Email Id require'
        }

        if (contactFormData.text === '') {
            error.text = 'Please mention your query'
        }
        setContactFormError({...error});

        return Object.keys(error).length < 1;
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        let isValid = validateForm()

        if (isValid) {
            setContactMsg(true);
            setContactForm(false);
            setFormData(() => ({
                email: '', text: '',
            }))
        } else {
            event.preventDefault()
        }

    }

    return (<div>
        <div className={contactForm ? '' : ' hideContactForm'}>
            <h2>We'd Love to Hear from You</h2>
            <h3 className="contactus-text">For any enquires, fill out the form below and a team member will get back
                to you.</h3>

            <form onSubmit={onSubmitHandler} className="contactus-form">
                <p className="contactForm-group">
                    <label htmlFor="email" className="contactForm-label ">Email Id:
                        <span className="required-contactForm"><strong>*</strong>required</span>
                    </label>
                    <input className="contactForm-control " name="email" onChange={onChangeHandler}
                           value={contactFormData.email}/>
                    <span className='non-valid'>{contactFormError.email}</span>
                </p>

                <p className="contactForm-group">
                    <label htmlFor="text" className="contactForm-label ">Your message:
                        <span className="required"><strong>*</strong>required</span>
                    </label>
                    <textarea className="contactForm-control textmsg " name="text" onChange={onChangeHandler}
                              value={contactFormData.text}/>
                    <span className='non-valid'>{contactFormError.text}</span>
                </p>


                <div className="button-contactPage">
                    <button type="submit" className="submit-button-contactPage">Send</button>

                </div>
            </form>
        </div>
        {openContactMsg && <SubmitContactForm onNav={onNav}/>}
    </div>);
}

export default ContactUs;