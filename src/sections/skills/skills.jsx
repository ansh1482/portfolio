import HeadingWhite from '../../components/heading/heading-white';
import './skills.css';
import Panel from '../../components/panel/panel';
import s1 from '../../assets/skills/1.png'
import s2 from '../../assets/skills/2.png'
import s3 from '../../assets/skills/3.png'
import s4 from '../../assets/skills/4.png'
import s5 from '../../assets/skills/5.png'
import s6 from '../../assets/skills/6.png'
import s7 from '../../assets/skills/7.png'
import s8 from '../../assets/skills/8.png'

const images = [s1, s2, s3, s4, s5, s6, s7, s8];

const Skills = () => {
    return (
        <div className="skills">
            <HeadingWhite>
                <h1>Tech Skills</h1>
            </HeadingWhite>
            <div className="skills-content">
                {
                    images.map((item, key) => <Panel key={key} style={{margin: "20px", flex: "0 0 30%", textAlign: "center"}}><img src={item} /></Panel>)
                }
            </div>
        </div>
    );
}

export default Skills;