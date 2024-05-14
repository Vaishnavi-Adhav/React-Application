import './css/machinelearning.css';

function MachineLearningCourse() {

    return (
        <div>
            <h2>Machine Learning Course</h2>

            <div className="machinelearning-content">
                <h3>Things we will cover in this course: </h3>
                <p className="machinelearningcourse-content">
                    Week 1: Understand principles behind machine learning
                    problems such as classification, regression, clustering, and reinforcement learning.non-negative
                    matrix factorization, latent factor models, PCA and variations.
                </p>
                <p className="machinelearningcourse-content">
                    Week 2: Implement and analyze models such as linear
                    models, kernel machines, neural networks, and graphical models. Mixtures of Gaussians, matrix
                    factorization.
                </p>
                <p className="machinelearningcourse-content">
                    Week 3: Linear classifiers, separability, perceptron algorithm. Maximum margin hyperplane, loss,
                    regularization. Markov models, hidden Markov models.
                </p>
                <p className="machinelearningcourse-content">
                    Week 4: Implement and organize machine learning projects,
                    from training, validation, parameter tuning, to feature engineering.
                </p>
                <p className="machinelearningcourse-content">
                    Week 5: Nearest neighbor classification, Bayes classifiers, linear classifiers, perceptron.
                </p>

            </div>
        </div>
    );
}

export default MachineLearningCourse;