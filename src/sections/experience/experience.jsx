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
                <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                    <div className="exp">
                        <PanelWhite style={{padding: "20px", display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap"}}>
                            <RaisedPanelWhite style={{flex: "1", textAlign: "center"}}>
                                <img src={oracle} />
                            </RaisedPanelWhite>
                            <div style={{marginLeft: "20px", flex: "1"}}>
                                <h2>Oracle</h2>
                                <h4>Joining from 2022</h4>
                                <h5>Member of Technical Staff</h5>
                            </div>
                            <PanelWhite style={{padding: "30px", margin: "20px", flex: "3"}}>
                                <h4 style={{textAlign: "left"}}>Description</h4>
                                <h5 style={{textAlign: "left"}}>Coming Soon!!!</h5>
                            </PanelWhite>
                        </PanelWhite>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                    <div className="exp">
                        <PanelWhite style={{padding: "20px", display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap"}}>
                            <RaisedPanelWhite style={{flex: "1", textAlign: "center"}}>
                                <img src={oracle} />
                            </RaisedPanelWhite>
                            <div style={{marginLeft: "20px", flex: "1"}}>
                                <h2>Oracle</h2>
                                <h4>June 2021 - July 2021</h4>
                                <h5>Apps Development Intern</h5>
                            </div>
                            <PanelWhite style={{padding: "30px", margin: "20px", flex: "3"}}>
                                <h4 style={{textAlign: "left"}}>Description</h4>
                                <h5 style={{textAlign: "left"}}>Worked on building REST APIs using JDev for Product Replacement in SCM Healthcare. Also created webpages using OJET to provide visual interface for the users requesting for Product Replacement.</h5>
                            </PanelWhite>
                        </PanelWhite>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="slideInRight" animateOnce={true}>
                    <div className="exp">
                        <PanelWhite style={{padding: "20px", display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "wrap"}}>
                            <RaisedPanelWhite style={{flex: "1", textAlign: "center"}}>
                                <img src={walmart} />
                            </RaisedPanelWhite>
                            <div style={{marginLeft: "20px", flex: "1"}}>
                                <h2>Walmart Labs</h2>
                                <h4>May 2020 - June 2020</h4>
                                <h5>Data Engineering Intern</h5>
                            </div>
                            <PanelWhite style={{padding: "30px", margin: "20px", flex: "3"}}>
                                <h4 style={{textAlign: "left"}}>Description</h4>
                                <h5 style={{textAlign: "left"}}>Learned the process of building an ETL pipeline using Talend. Created an ETL pipeline for extracting and loading the transactional data of customers of a retail store. Analysed the extracted data to get insights into the business.</h5>
                            </PanelWhite>
                        </PanelWhite>
                    </div>
                </ScrollAnimation>

            </div>
        </div>
    );
}

export default Experience;