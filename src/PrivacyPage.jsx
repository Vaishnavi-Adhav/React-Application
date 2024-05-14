import './css/privacypage.css';

function PrivacyPage({onNav}) {

    return (<div>
        <h2>Privacy Policy</h2>
        <div className="privacy-policy">
            <p className="privacy">This Privacy Policy governs the manner in which the School collects,
                uses, maintains and discloses information collected from users (each, a “Student”) of the School.
                This Privacy Policy applies to the School and all Courses offered by the School.
            </p>

            <h3>Personal identification information</h3>
            <p className="privacy">
                We may collect personal identification information from Students in a
                variety of ways, including, but not limited to, when Students enroll in the
                School or a Course within the School, subscribe to a newsletter, and in connection
                with other activities, services, features, or resources we make available in our School.
                Students may visit the School anonymously. We will collect personal identification information
                from Students only if they voluntarily submit such information to us.
            </p>

            <h3>How we use collected information</h3>
            <p className="privacy">
                The School may collect and use Students’ personal identification information for the following
                purposes:
                1) To improve customer service Information you provide helps us respond to your customer
                service requests and support needs more efficiently.
                2) To personalize user experience.We may use information in the aggregate to understand how our
                Students as a group use the services and resources provided in our School.
            </p>

            <h3>Sharing your personal information</h3>
            <p className="privacy">
                We do not sell, trade, or rent Student personal identification information to others.
            </p>

            <h3>Changes to this Privacy Policy</h3>
            <p className="privacy">
                The School has the discretion to update this Privacy Policy at any time.
                We encourage Students to frequently check this page for any changes.
                You acknowledge and agree that it is your responsibility
                to review this Privacy Policy periodically and become aware of modifications.
            </p>

            <h3>Your acceptance of these terms</h3>
            <p className="privacy">
                By enrolling in the School, you signify your acceptance
                of this Privacy Policy. If you do not agree to this Privacy Policy, please do not enroll in the
                School.
            </p>
        </div>
    </div>);
}

export default PrivacyPage;