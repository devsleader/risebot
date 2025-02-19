
import Link from 'next/link';

const team4Image = '/assets/images/common/team_4.png';
const team5Image = '/assets/images/common/team_5.png';
const team6Image = '/assets/images/common/team_6.png';

const Questions = () => {
    return (
        <div className="inner-page">
            <section className="tf-section questions">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div 
                                className="tf-title" 
                                data-aos="fade-up" 
                                data-aos-duration="800"
                            >
                                <h2 className="title mb20">
                                    still have a questions
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="question-content">
                                <div className="image-wrapper">
                                    <div className="image">
                                        <img
                                            src={team6Image}
                                            alt="Team member 6"
                                        />
                                    </div>
                                    <div className="image">
                                        <img
                                            src={team5Image}
                                            alt="Team member 5"
                                        />
                                    </div>
                                    <div className="image">
                                        <img
                                            src={team4Image}
                                            alt="Team member 4"
                                        />
                                    </div>
                                </div>
                                <p>
                                    If you cannot find answer to your question in our faq, you can always contact us.{' '}
                                    <br className="show-destop" />
                                    We will answer to you shortly
                                </p>
                                <div className="wrap-btn justify-content-center">
                                    <Link 
                                        href="/contact" 
                                        className="tf-button style1"
                                    >
                                        Contact us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Questions;