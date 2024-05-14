import "./css/register.css";
import {useState} from "react";
import SubmittedForm from "./SubmittedForm";

function Register({onNav}) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        institute: '',
        occupation: '',
        otheroccupation: '',
        company: '',
        course: '',
        gender: '',
        languages: [],
    })

    const [formError, setFormError] = useState({})
    const [institute, setInstitute] = useState();
    const [company, setCompany] = useState();
    const [otherOccupation, setOtherOccupation] = useState();
    const [openModal, setModal] = useState(false);
    const [regForm, setRegForm] = useState(true);


    const onChangeHandler = (event) => {

        if (event.target.name === 'languages') {

            let copy = {...formData}

            if (event.target.checked) {
                copy.languages.push(event.target.value)
            } else {
                copy.languages = copy.languages.filter(el => el !== event.target.value)
            }

            setFormData(copy)

        } else {
            setFormData(() => ({
                ...formData, [event.target.name]: event.target.value
            }))
        }

        if (event.target.value === '') {

            const getinstitute = event.target.value;
            setInstitute('');
            setCompany('');
            setOtherOccupation('');

        }

        if (formData.institute) {
            setInstitute('student');
            setCompany('');
            setOtherOccupation('');
        }

        if (formData.company) {
            setInstitute('');
            setCompany('employee');
            setOtherOccupation('');
        }

        if (formData.otheroccupation) {

            setOtherOccupation('other-occupation');
            setInstitute('');
            setCompany('');
        }

        if (event.target.value === 'student') {

            const getinstitute = event.target.value;
            setInstitute(getinstitute);
            setCompany('');
            setOtherOccupation('');

        }

        if (event.target.value === 'employee') {
            const getcompany = event.target.value;
            setCompany(getcompany);
            setInstitute('');
            setOtherOccupation('');

        }
        if (event.target.value === 'other-occupation') {
            const getother = event.target.value;
            setOtherOccupation(getother);
            setCompany('');
            setInstitute('');

        }
    }

    const validateForm = () => {
        let err = {}

        if (formData.username === '') {
            err.username = 'Username required!'
        }
        if (formData.email === '') {
            err.email = 'Email required!'
        } else {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (!regex.test(formData.email)) {
                err.email = 'Email not valid!'
            }
        }

        if (formData.occupation === '') {
            err.occupation = 'Occupation required!'
        }
        if (formData.course === '') {
            err.course = 'Course required! '
        }

        if (formData.gender === '') {
            err.gender = 'Gender required!'
        }
        if (formData.languages.length < 1) {
            err.languages = 'At least one language required!'
        }

        setFormError({...err})

        return Object.keys(err).length < 1;
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        let isValid = validateForm()

        if (isValid) {

            setModal(true);
            setRegForm(false);

            setFormData(() => ({
                username: '',
                email: '',
                institute: '',
                occupation: '',
                otheroccupation: '',
                course: '',
                gender: '',
                languages: [],
            }))
            setCompany('');
            setInstitute('');
            setOtherOccupation('');

        } else {
            event.preventDefault()
        }

    }
    return (<div>
            <div className={regForm ? 'main-registration-form' : 'main-registration-form hideform'}>
                <h2>Registration Form</h2>
                <form className="registration-form">

                    <label htmlFor="username" className="form-label">Full Name:
                        <span className="required"><strong>*</strong>required</span>
                    </label>
                    <input className="form-control" name="username" onChange={onChangeHandler}
                           value={formData.username}/>
                    <span className='non-valid'>{formError.username}</span>

                    <label htmlFor="email" className="form-label email-label">Email Id:
                        <span className="required"><strong>*</strong>required</span>
                    </label>
                    <input className="form-control email-input" name="email" onChange={onChangeHandler}
                           value={formData.email}/>
                    <span className='non-valid'>{formError.email}</span>

                    <label htmlFor="occupation" className="form-label">Occupation:
                        <span className="required"><strong>*</strong>required</span>
                    </label>
                    <select className="form-select" name="occupation" onChange={onChangeHandler}
                            value={formData.occupation}>
                        <option value=""></option>
                        <option value="student">Student</option>
                        <option value="employee">Employee</option>
                        <option value="other-occupation">Other</option>
                    </select>
                    <span className='non-valid'>{formError.occupation}</span>

                    {institute === 'student' && (<div className="form-institute">
                            <label htmlFor="institute" className="institute-label">Institute Name: </label>
                            <input className="institute-input " name="institute" onChange={onChangeHandler}
                                   value={formData.institute}/>
                            <span className='non-valid'>{formError.institute}</span>
                        </div>

                    )}

                    {otherOccupation === 'other-occupation' && (<div className="form-other">
                            <label htmlFor="otheroccupation" className="other-label">Enter Occupation: </label>
                            <input className="other-input " name="otheroccupation" onChange={onChangeHandler}
                                   value={formData.otheroccupation}/>
                            <span className='non-valid'>{formError.otheroccupation}</span>
                        </div>

                    )}

                    {company === 'employee' && (<div className="form-company">
                            <label htmlFor="company" className="company-label">Company Name: </label>
                            <input className="company-input" name="company" onChange={onChangeHandler}
                                   value={formData.company}/>
                            <span className='non-valid'>{formError.company}</span>
                        </div>

                    )}

                    <label htmlFor="course" className="form-label">Select Course:
                        <span className="required"><strong>*</strong>required</span>
                    </label>
                    <select className="form-select" name="course" onChange={onChangeHandler} value={formData.course}>
                        <option value=""></option>
                        <option value="html">Html</option>
                        <option value="blockchain">Blockchain</option>
                        <option value="angular">Angular</option>
                        <option value="machine">Machine Learning</option>
                    </select>
                    <span className='non-valid'>{formError.course}</span>


                    <label htmlFor="gender" className="form-label">Gender:
                        <span className="required"><strong>*</strong>required</span></label>
                    <div className="form-radio-section">
                        <div>
                            <input type="radio" name="gender" value="male" onChange={onChangeHandler}
                                   checked={formData.gender === 'male'}/>
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input type="radio" name="gender" value="female" onChange={onChangeHandler}
                                   checked={formData.gender === 'female'}/>
                            <label htmlFor="female">Female</label>
                        </div>
                        <div>
                            <input type="radio" name="gender" value="other" onChange={onChangeHandler}
                                   checked={formData.gender === 'other'}/>
                            <label htmlFor="other">Other</label>
                        </div>
                        <span className='non-valid'>{formError.gender}</span>
                    </div>

                    <label htmlFor="languages" className="form-label">Languages Known:
                        <span className="required"><strong>*</strong>required</span></label>
                    <div className="form-checkbox-section">
                        <div>
                            <input type="checkbox" name="languages" value="java" onChange={onChangeHandler}
                                   checked={formData.languages.indexOf('java') !== -1}/>
                            <label htmlFor="java">Java</label>
                        </div>
                        <div>
                            <input type="checkbox" name="languages" value="swift" onChange={onChangeHandler}
                                   checked={formData.languages.indexOf('swift') !== -1}/>
                            <label htmlFor="swift">Swift</label>
                        </div>
                        <div>
                            <input type="checkbox" name="languages" value="python" onChange={onChangeHandler}
                                   checked={formData.languages.indexOf('python') !== -1}/>
                            <label htmlFor="python">Python</label>
                        </div>
                    </div>
                    <span className='non-valid'>{formError.languages}</span>

                    <div className="form-group">
                        <button className="submit-button" aria-label="Register Button" type="submit"
                                onClick={onSubmitHandler}>Register
                        </button>

                    </div>

                </form>

            </div>
            {openModal && <SubmittedForm onNav={onNav}/>}
        </div>);
}

export default Register;
