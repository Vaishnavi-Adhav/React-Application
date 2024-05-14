import './css/footer.css';
import contactUsForm from "./contactUsForm";
import termsOfUse from "./terms";
import privacy from "./privacy";


function Footer({onNav}) {
    const contactusLinks = contactUsForm.map(contactUsItem => {
        return (
            <a onClick={onNav} key={contactUsItem.title} href={contactUsItem.url} data-target={contactUsItem.title}>Contact
                Us </a>
        );
    });

    const termLinks = termsOfUse.map(termItem => {
        return (
            <a onClick={onNav} key={termItem.title} href={termItem.url} data-target={termItem.title}>Terms of Use</a>
        );
    });

    const privacyLinks = privacy.map(privacyItem => {
        return (
            <a onClick={onNav} key={privacyItem.title} href={privacyItem.url} data-target={privacyItem.title}>Privacy
                Policy</a>
        );
    });

    return (
        <footer className="footer">
            <ul className="footerlinks">
                <li className="footerlinks__item">{privacyLinks}</li>
                <li className="footerlinks__item">{contactusLinks}</li>
                <li className="footerlinks__item">{termLinks}</li>
            </ul>
        </footer>
    );
}

export default Footer;