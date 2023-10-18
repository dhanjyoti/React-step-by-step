import './styleText.css';

const TextComponent = ({icon, text}) => {
    return (
        <div className="component">
            <div>{icon}</div>
            <div>{text}</div>
        </div>
    )
}

export default TextComponent;