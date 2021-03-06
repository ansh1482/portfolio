import './heading.css'
import ScrollAnimation from 'react-animate-on-scroll';

const HeadingBlack = (props) => {
    return (
        <ScrollAnimation animateIn="bounceInLeft" animateOnce={true}>
            <div className="heading hblack">
                {props.children}
            </div>
        </ScrollAnimation>
    );
}

export default HeadingBlack;