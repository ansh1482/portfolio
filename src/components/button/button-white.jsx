import './button.css'

const ButtonWhite = (props) => {
    return (
        <button className="button-white" style={{animationDuration: props.duration ,color: props.textColor, background: props.backgroundColor, ...props.style}} onClick={props.onClick}>{props.text}</button>
    );
}

export default ButtonWhite;