import './introduction.css'
import Button from '../../components/button/button'
import Panel from '../../components/panel/panel'
import img from '../../assets/my.png'
import HeadingWhite from '../../components/heading/heading-white'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faGithub, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ButtonWhite from "../../components/button/button-white";
import ScrollAnimation from 'react-animate-on-scroll'

const Introduction = () => {
    return (
        <div className="introduction">
            <HeadingWhite>
                <div style={{display: "flex", flexDirection: "row", width: "100%", flexWrap: "wrap"}}>
                    <ButtonWhite onClick={() => window.open("mailto:gupta.ansh2000@gmail.com")} style={{marginTop: "15px", marginBottom: "15px", marginLeft: "40px", borderRadius: "100%"}} duration="0.5s" text={<FontAwesomeIcon icon={faEnvelope} />} textColor="#232323" backgroundColor="#d6d6d6" />
                    <ButtonWhite onClick={() => window.open("https://github.com/ansh1482")} style={{marginTop: "15px", marginBottom: "15px", marginLeft: "10px", borderRadius: "100%"}} duration="1s" text={<FontAwesomeIcon icon={faGithub} />} textColor="#232323" backgroundColor="#d6d6d6" />
                    <ButtonWhite onClick={() => window.open("https://www.instagram.com/ansh.gupta.1232/")} style={{marginTop: "15px", marginBottom: "15px", marginLeft: "10px", borderRadius: "100%"}} duration="1.5s" text={<FontAwesomeIcon icon={faInstagramSquare} />} textColor="#232323" backgroundColor="#d6d6d6" />
                    <ButtonWhite onClick={() => window.open("https://www.facebook.com/ansh.gupta.1232")} style={{marginTop: "15px", marginBottom: "15px", marginLeft: "10px", borderRadius: "100%"}} duration="2s" text={<FontAwesomeIcon icon={faFacebook} />} textColor="#232323" backgroundColor="#d6d6d6" />
                    <ButtonWhite onClick={() => window.open("https://www.linkedin.com/in/ansh-gupta-b7540a178/")} style={{marginTop: "15px", marginBottom: "15px", marginLeft: "10px", borderRadius: "100%", marginRight: "20px"}} duration="2.5s" text={<FontAwesomeIcon icon={faLinkedinIn} />} textColor="#232323" backgroundColor="#d6d6d6" />
                </div>
            </HeadingWhite>
            <div className="intro-row1">
                <ScrollAnimation animateIn="flipInX">
                    <div className="intro-row1-col1">
                        <h3><span>Ansh Gupta</span></h3>
                        <h4>Developer with a passion for learning new things.</h4>
                        <Button text="Download Résumé" backgroundColor="#232323" textColor="#d6d6d6" style={{margin: "30px"}} onClick={() => window.open("https://drive.google.com/file/d/1GQxC_WyTQNl_H41NTKlQjox-8eS2jR33/view?usp=sharing", "_blank")} />
                    </div>
                </ScrollAnimation>
                <div className="intro-row1-col2">
                    <Panel>
                        <Panel style={{margin: "20px"}}>
                            <img src={img} />
                        </Panel>
                    </Panel>
                </div>
            </div>
        </div>
    );
}

export default Introduction;