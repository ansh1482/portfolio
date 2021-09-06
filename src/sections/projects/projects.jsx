
import ScrollAnimation from 'react-animate-on-scroll';
import ButtonWhite from '../../components/button/button-white';
import HeadingBlack from '../../components/heading/heading-black';
import PanelWhite from '../../components/panel/panel-white';
import RaisedPanelWhite from '../../components/panel/raised-panel-white';
import './projects.css';

const Projects = () => {
    return (
        <div className="projects">
            <HeadingBlack>
                <h1>Projects</h1>
            </HeadingBlack>
            <div className="projects-content">
                <RaisedPanelWhite style={{padding: "10px", margin: "20px", flex: "0 0 25%"}}>
                    <PanelWhite style={{padding: "10px", marginBottom: "10px"}}>
                        <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}><h1>Quewer</h1></ScrollAnimation>
                    </PanelWhite>
                    <PanelWhite style={{padding: "10px", width: "fit-content", marginLeft: "5%", marginTop: "20px", borderRadius: "10px"}}>
                        <h3>Description:</h3>
                    </PanelWhite>
                    <ScrollAnimation animateIn="fadeIn" duration={2.5} animateOnce={true}><h4>Web based QnA application, designed for BITS Pilani, Hyderabad Campus students.</h4></ScrollAnimation>
                    <ButtonWhite onClick={() => window.open("https://github.com/manugupta98/Quewer")} style={{margin: "10px 5%", padding: "15px", borderRadius: "20px"}} text={"Go to code"} textColor="#232323" backgroundColor="#d6d6d6" />
                </RaisedPanelWhite>

                <RaisedPanelWhite style={{padding: "10px", margin: "20px", flex: "0 0 25%"}}>
                    <PanelWhite style={{padding: "10px", marginBottom: "10px"}}>
                        <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}><h1>MediChain</h1></ScrollAnimation>
                    </PanelWhite>
                    <PanelWhite style={{padding: "10px", width: "fit-content", marginLeft: "5%", marginTop: "20px", borderRadius: "10px"}}>
                        <h3>Description:</h3>
                    </PanelWhite>
                    <ScrollAnimation animateIn="fadeIn" duration={2.5} animateOnce={true}><h4>A Blockchain based app to speed up the registration process at hospitals.</h4></ScrollAnimation>
                    <ButtonWhite onClick={() => window.open("https://github.com/1parveenjakhar/Crypto-Project")} style={{margin: "10px 5%", padding: "15px", borderRadius: "20px"}} text={"Go to code"} textColor="#232323" backgroundColor="#d6d6d6" />
                </RaisedPanelWhite>

                <RaisedPanelWhite style={{padding: "10px", margin: "20px", flex: "0 0 25%"}}>
                    <PanelWhite style={{padding: "10px", marginBottom: "10px"}}>
                        <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}><h1>Cabbie</h1></ScrollAnimation>
                    </PanelWhite>
                    <PanelWhite style={{padding: "10px", width: "fit-content", marginLeft: "5%", marginTop: "20px", borderRadius: "10px"}}>
                        <h3>Description:</h3>
                    </PanelWhite>
                    <ScrollAnimation animateIn="fadeIn" duration={2.5} animateOnce={true}><h4>A Java based application to simulate the process of booking a cab.</h4></ScrollAnimation>
                    <ButtonWhite onClick={() => window.open("https://github.com/manugupta98/Cabbie")} style={{margin: "10px 5%", padding: "15px", borderRadius: "20px"}} text={"Go to code"} textColor="#232323" backgroundColor="#d6d6d6" />
                </RaisedPanelWhite>
            </div>
        </div>
    );
}

export default Projects;