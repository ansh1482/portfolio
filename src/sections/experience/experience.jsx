import './experience.css';
import HeadingBlack from '../../components/heading/heading-black';
import RaisedPanelWhite from '../../components/panel/raised-panel-white';
import oracle from '../../assets/OracleLogo.png';
import walmart from '../../assets/WalmartLogo.png';
import PanelWhite from '../../components/panel/panel-white';
import ScrollAnimation from 'react-animate-on-scroll';

const Experience = () => {
    return (
        <div className="experience">
            <HeadingBlack>
                <h1>Experience</h1>
            </HeadingBlack>

            <div className="experience-content">
                <ScrollAnimation animateIn="slideInRight">
                    <div className="exp">
                        <PanelWhite style={{padding: "20px", position: "relative", zIndex: "10", left: "10px"}}>
                            <RaisedPanelWhite>
                                <img src={oracle} />
                            </RaisedPanelWhite>
                        </PanelWhite>
                        <PanelWhite style={{width: "500px", height: "20px", position: "relative"}}></PanelWhite>
                        <PanelWhite style={{padding: "30px", position: "relative", zIndex: "10", right: "10px", width: "200px"}}>
                            <h2>Oracle</h2>
                            <h4>Joining from 2022</h4>
                            <h5>Member of Technical Staff</h5>
                        </PanelWhite>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="slideInLeft">
                    <div className="exp">
                        <PanelWhite style={{padding: "20px", position: "relative", zIndex: "10", left: "10px"}}>
                            <RaisedPanelWhite>
                                <img src={oracle} />
                            </RaisedPanelWhite>
                        </PanelWhite>
                        <PanelWhite style={{width: "500px", height: "20px", position: "relative"}}></PanelWhite>
                        <PanelWhite style={{padding: "30px", position: "relative", zIndex: "10", right: "10px", width: "200px"}}>
                            <h2>Oracle</h2>
                            <h4>June 2021 - July 2021</h4>
                            <h5>Apps Development Intern</h5>
                        </PanelWhite>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="slideInRight">
                    <div className="exp">
                        <PanelWhite style={{padding: "20px", position: "relative", zIndex: "10", left: "10px"}}>
                            <RaisedPanelWhite>
                                <img src={walmart} />
                            </RaisedPanelWhite>
                        </PanelWhite>
                        <PanelWhite style={{width: "500px", height: "20px", position: "relative"}}></PanelWhite>
                        <PanelWhite style={{padding: "30px", position: "relative", zIndex: "10", right: "10px", width: "200px"}}>
                            <h2>Walmart Labs</h2>
                            <h4>May 2020 - June 2020</h4>
                            <h5>Data Engineering Intern</h5>
                        </PanelWhite>
                    </div>
                </ScrollAnimation>

            </div>
        </div>
    );
}

export default Experience;