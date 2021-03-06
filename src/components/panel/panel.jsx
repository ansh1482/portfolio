import './panel.css';

const Panel = (props) => {
    return (
        <div className="panel" style={props.style}>
            {props.children}
        </div>
    );
}

export default Panel;