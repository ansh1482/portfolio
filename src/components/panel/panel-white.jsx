import './panel.css';

const PanelWhite = (props) => {
    return (
        <div className={`panel-white ${props.class}`} style={props.style}>
            {props.children}
        </div>
    );
}

export default PanelWhite;