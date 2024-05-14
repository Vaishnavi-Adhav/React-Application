import './css/htmlcourse.css';

function CourseHtml({onNav}) {

    return (<div>
            <h2>HTML Course</h2>

            <div className="html-content">
                <h3>Things we will cover in this course: </h3>
                <p className="htmlcourse-content">
                    Week 1: HTML5 basics
                    From HTML1.0 to HTML5
                    Structural elements
                </p>
                <p className="htmlcourse-content">
                    Week 2: HTML5 multimedia
                    Streaming multimedia content: the video and audio elements
                    Subtitles and closed captions
                    Webcam, microphone: the getUserMedia API
                </p>
                <p className="htmlcourse-content">
                    Week 3: HTML5 graphics
                    Basics of HTML5 canvas
                    Immediate drawing mode: rectangles, text, images, etc.
                    Path drawing mode: lines, circles, arcs, curves, etc.
                    Colors, gradients, patterns, shadows, etc.
                </p>
                <p className="htmlcourse-content">
                    Week 4: HTML5 forms
                    Introduction to HTML5 forms
                    Accessible forms
                    Input types, forms attributes
                    Form validation API
                </p>

            </div>
        </div>);

}

export default CourseHtml;