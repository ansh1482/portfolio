import './panel.css';

const RaisedPanelWhite = (props) => {
    return (
        <div className="raised-panel-white" style={props.style}>
            {props.children}
        </div>
    );
}

export default RaisedPanelWhite;