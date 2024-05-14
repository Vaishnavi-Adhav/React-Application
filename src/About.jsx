import './css/about.css';

function About({onNav}) {

    return (<div>
        <h2>About Technology School and Courses Available Here.</h2>

        <div className="about-website">
            <h3>Technology School</h3>
            <p className="about-html-content">Technology School is a global destination for teaching and learning
                online.
                It was founded in May 2010 by Henry Bali. As of July 2022, the platform has
                more than 54 students, 4 courses, and 5 instructors teaching courses in over 4 languages.
            </p>
            <h3>HTML</h3>
            <p className="about-html-content">HTML is a markup language that defines the structure of your content.
                HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the
                content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or
                image hyperlink to somewhere else, can italicize words,
                can make the font bigger or smaller, and so on. For example, take the following line of content.
                Course Duration : 4 weeks

            </p>
            <h3>Blockchain</h3>
            <p className="about-blockchain-content">A blockchain is a growing list of records
                called blocks which are interconnected by utilizing cryptography. Each block contains a
                cryptographic
                hash of the previous block, a time stamp, and exchange information. Utilizing blockchain we can
                safely
                store information over the shared system, where everybody can see but can’t do any alteration.
                Blockchain will track all information trade called ledger and it uses a distributed system to verify
                every exchange.
                Course Duration : 4 weeks
            </p>
            <h3>Angular</h3>
            <p className="about-angular-content">
                Angular is an open-source, JavaScript framework written in TypeScript.
                Google maintains it, and its primary purpose is to develop single-page applications.
                As a framework, Angular has clear advantages while also providing a standard structure
                for developers to work with. It enables users to create large applications in a maintainable
                manner.Frameworks
                in general boost web development efficiency and performance by providing a consistent structure so
                that developers
                don’t have to keep rebuilding code from scratch. Frameworks are time savers
                that offer developers a host of extra features that can be added to software without requiring extra
                effort.
                Course Duration : 4 weeks

            </p>

            <h3>Machine Learning</h3>
            <p className="about-machine-content">Machine learning –
                and its components of deep learning and neural networks – all fit as concentric subsets of AI.
                AI processes data to make decisions and predictions. Machine learning algorithms
                allow AI to not only process that data, but to use it to learn and get smarter, without
                needing any additional programming. Artificial intelligence is the parent of all the machine
                learning subsets beneath it. Within the first subset is machine learning; within that is deep
                learning,
                and then neural networks within that.Machine learning is an important component of the growing field
                of data science.
                Through the use of statistical methods, algorithms are trained to make classifications or
                predictions, and to uncover
                key insights in data mining projects. These insights subsequently drive decision making within
                applications and businesses,
                ideally impacting key growth metrics. As big data continues to expand and grow, the market demand
                for data scientists will increase.
                They will be required to help identify the most relevant business questions and the data to answer
                them.
                Course Duration : 5 weeks

            </p>

        </div>
    </div>);

}

export default About;