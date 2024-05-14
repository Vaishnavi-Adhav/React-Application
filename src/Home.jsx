import './css/home.css';
import htmlCourseLink from "./htmlCourseLink";
import blockchainLink from "./blockchainCourse";
import angularCourseLink from "./angularCourseLink";
import machineLearningLink from "./machineLearningLink";


function Home({onNav}) {

    const htmllink = htmlCourseLink.map(htmlitem => {
        return (
            <a className="readmore" onClick={onNav} key={htmlitem.title} href={htmlitem.url}
               data-target={htmlitem.title}>Read
                More </a>
        );
    });

    const blockchainlinks = blockchainLink.map(blockchainitem => {
        return (
            <a className="readmore" onClick={onNav} key={blockchainitem.title} href={blockchainitem.url}
               data-target={blockchainitem.title}>Read
                More </a>
        );
    });

    const angularcourselinks = angularCourseLink.map(angularitem => {
        return (
            <a className="readmore" onClick={onNav} key={angularitem.title} href={angularitem.url}
               data-target={angularitem.title}>Read
                More </a>
        );
    });

    const machinelearninglinks = machineLearningLink.map(machinelearningitem => {
        return (
            <a className="readmore" onClick={onNav} key={machinelearningitem.title} href={machinelearningitem.url}
               data-target={machinelearningitem.title}>Read
                More </a>
        );
    });

    return (
        <div className="card-content">
            <div className="content-heading">
                <h2>Courses Available At Our School</h2>
            </div>
            <div className="card1">
                <h3>HTML Beginner</h3>
                <div className="image"><img className="card-image" alt="Html tag" src={require("./images/html.jpg")}/>
                </div>
                <p>HTML course provides training on basic and advanced concepts of HTML. Our HTML tutorial is developed
                    for
                    beginners and professionals. In our tutorial, every topic is given step-by-step so that you can
                    learn it in a very easy way. If you are new in learning HTML, then you can learn HTML from basic to
                    a
                    professional level and after learning HTML with CSS and JavaScript you will be
                    able to create your own interactive and dynamic website.
                </p>
                <div className="moreinfo">{htmllink}</div>
            </div>

            <div className="card2">
                <h3>Blockchain Expert</h3>
                <div className="image"><img className="card-image" alt="Nodes network"
                                            src={require("./images/blockchain.jpg")}/>
                </div>
                <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions
                    and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or
                    intangible intellectual property, patents, copyrights, branding.
                    Virtually anything of value can be tracked and traded on a blockchain network, reducing risk
                    and cutting costs for all involved.</p>
                <div className="moreinfo">{blockchainlinks}</div>
            </div>

            <div className="card3">
                <h3>Angular Intermediate</h3>
                <div className="image"><img className="card-image" alt="angular title"
                                            src={require("./images/angular.jpg")}/>
                </div>
                <p>Angular JS is an open-source, client-side TypeScript based JavaScript framework.
                    It is written in TypeScript and complied into JavaScript. Angular JS is used to create dynamic web
                    applications.
                    It is very similar to its previous versions except having some extensive features.Angular community
                    has released
                    its latest version known as Angular 11.
                </p>
                <div className="moreinfo">{angularcourselinks}</div>
            </div>

            <div className="card4">
                <h3>Machine Learning</h3>
                <div className="image"><img className="card-image" alt="machine learning title"
                                            src={require("./images/machine-learning.jpg")}/>
                </div>
                <p>Machine Learning course provides basic and advanced concepts of machine learning.
                    Our machine learning tutorial is designed for students and working professionals.
                    Machine learning is a growing technology which enables computers to learn automatically
                    from past data. Machine learning uses various algorithms for
                    building mathematical models and making predictions using historical data or information.
                </p>
                <div className="moreinfo">{machinelearninglinks}</div>
            </div>
        </div>
    );

}

export default Home;