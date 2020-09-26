import BaseLayout from '@/components/layouts/baseLayout'
import {Container, Row, Col} from 'reactstrap'
import Typed from 'react-typed'

const Roles = ['Data Scientist', 'Deep Learning Engineer','Machine Learning','Web Developer']

const Index = () => {  
    return(
        <BaseLayout className="cover">
            <div className="main-section">
                <div className="background-image">
                    <img src="/images/background-index.png" />
                </div>

                <Container>
                    <Row>
                        <Col md="6">
                            <div className="hero-section">
                                <div className={`flipper`}>
                                    <div className="back">
                                        <div className="hero-section-content">
                                            <h2> Aspiring Data Scientist</h2>
                                            <div className="hero-section-content-intro">
                                                Have a look at my portfolio.
                                            </div>
                                        </div>
                                        <img className="image" src="/images/section-1.jpg"/>
                                        <div className="shadow-custom">
                                            <div className="shadow-inner"> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="6" className="hero-welcome-wrapper">
                            <div className="hero-welcome-text">
                                <h1>
                                    Welcome to the portfolio website of Monit Patel.
                                    Get informed, collaborate and discover projects I was working on through the years!
                                </h1>
                            </div>

                            <Typed
                                loop
                                strings={Roles}
                                typeSpeed={44}
                                backSpeed={44}
                                backDelay = {888}
                                loopCount = {0}
                                showCursor
                                className = "self-typed"
                                cursorChar = "|"
                            />

                            <div className="hero-welcome-bio">
                                <h1>
                                    Let's take a look on my work.
                                </h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </BaseLayout>  
    )
}

export default Index