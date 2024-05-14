import './css/angularcourse.css';

function AngularCourse() {

    return (<div>
        <h2>Angular Course</h2>

        <div className="angular-content">
            <h3>Things we will cover in this course: </h3>
            <p className="angularcourse-content">
                Week 1: Set up Angular and start using Angular modules and dependency injection.Be able to implement
                a functional front-end web application using Angular.You will also learn, what dependency injection
                is and how to use it.
            </p>
            <p className="angularcourse-content">
                Week 2: Implement controllers and bind to controller scope.Build a form in Angular and perform
                client-side validation.An introduction to NgRx and complex state management.

            </p>
            <p className="angularcourse-content">
                Week 3: Construct Angular views and templates by implementing expressions and built-in
                directives.You will learn,how to send HTTP requests.
            </p>
            <p className="angularcourse-content">
                Week 4: Implement promises as a method for processing asynchronous tasks.
            </p>

        </div>
    </div>);
}

export default AngularCourse;