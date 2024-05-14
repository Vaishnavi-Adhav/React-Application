import Home from './Home';
import About from './About';
import Register from "./Register";
import OurClients from "./OurClients";
import CourseHtml from "./CourseHtml";
import Blockchain from "./Blockchain";
import AngularCourse from "./AngularCourse";
import MachineLearningCourse from "./MachineLearningCourse";
import ContactUs from "./ContactUs";
import TermsOfUse from "./TermsOfUse";
import PrivacyPage from "./PrivacyPage";
import Faqs from "./Faqs";
import './css/main.css';

function Main({onNav, page}) {


    return (<main className='content' id="main-content" >
            {page === 'Home' && <Home onNav={onNav}/>}

            {page === 'About' && <About onNav={onNav}/>}

            {page === 'Register' && <Register onNav={onNav}/>}

            {page === 'Our Clients' && <OurClients/>}

            {page === 'FAQ' && <Faqs/>}

            {page === 'CourseHtml' && <CourseHtml onNav={onNav}/>}

            {page === 'Blockchain' && <Blockchain/>}

            {page === 'Angular' && <AngularCourse/>}

            {page === 'MachineLearning' && <MachineLearningCourse/>}

            {page === 'Home Page' && <Home onNav={onNav}/>}

            {page === 'Contact Us' && <ContactUs onNav={onNav}/>}

            {page === 'Terms of Use' && <TermsOfUse onNav={onNav}/>}

            {page === 'Privacy Policy' && <PrivacyPage onNav={onNav}/>}
        </main>);
}

export default Main;