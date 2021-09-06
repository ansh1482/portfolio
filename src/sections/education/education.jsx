import './education.css';
import HeadingWhite from '../../components/heading/heading-white';
import Panel from '../../components/panel/panel';
import school from '../../assets/LancersLogo.png';
import college from '../../assets/BITSLogo.png';
import ScrollAnimation from 'react-animate-on-scroll';

const Education = () => {
    return (
        <div className="education">
            <HeadingWhite>
                <h1>Education</h1>
            </HeadingWhite>
            <div className="education-content">
                <ScrollAnimation animateIn="flipInY" animateOnce={true}>
                    <Panel style={{color: "#d6d6d6", textAlign: "center", padding: "20px", width: "200px", margin: "10px 0px"}}>
                        <Panel style= {{margin: "20px auto", width: "fit-content"}}>
                            <img src={school} />
                        </Panel>
                        <h2>Lancer's Convent</h2>
                        <h4>2004-2018</h4>
                        <h5>CBSE Board(Non-medical)</h5>
                        <h5>Percentage: 95%</h5>
                    </Panel>
                </ScrollAnimation>
                <ScrollAnimation animateIn="flipInY" animateOnce={true}>
                    <Panel style={{color: "#d6d6d6", textAlign: "center", padding: "20px", width: "200px", margin: "10px 0px"}}>
                        <Panel style= {{margin: "20px auto", width: "fit-content"}}>
                            <img src={college} />
                        </Panel>
                        <h2>BITS Pilani</h2>
                        <h4>2018-2022</h4>
                        <h5>B.E. Computer Science</h5>
                        <h5>CGPA: 9.28</h5>
                    </Panel>
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default Education;