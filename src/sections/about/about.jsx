import ScrollAnimation from 'react-animate-on-scroll';
import HeadingBlack from '../../components/heading/heading-black'
import './about.css'

const About = () => {
    return (
        <div className="about">
            <HeadingBlack>
                <h1>About me</h1>
            </HeadingBlack>
            <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                <div className="about-content">
                    I am a hard-working and enthusiastic person, currently in my final year of engineering undergraduate degree course. I work with equal efficiency both in a team as well as an individual contributor.<br/><br/>
                    I love developing things, and the motivation to develop comes from the belief that some day the product developed by me would be of use to millions of people around the globe.<br/><br/>
                    Apart from being web & app developer (also an occasional poet), I am also interested in the growing fields of Blockchain and Artificial Intelligence.
                </div>
            </ScrollAnimation>
        </div>
    );
}

export default About;