import './button.css'

const Button = (props) => {
    return (
        <button className="button" style={{color: props.textColor, background: props.backgroundColor, ...props.style}} onClick={props.onClick}>{props.text}</button>
    );
}

export default Button;