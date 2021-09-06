import './heading.css'
import ScrollAnimation from 'react-animate-on-scroll';

const HeadingWhite = (props) => {
    return (
        <ScrollAnimation animateIn="bounceInRight" initiallyVisible={true} animateOnce={true}>
            <div className="heading hwhite">
                {props.children}
            </div>
        </ScrollAnimation>
    );
}

export default HeadingWhite;