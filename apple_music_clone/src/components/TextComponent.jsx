import './componentText.css';

const TextComponent = ({icon, text}) => {
    return (
        <div className="comopnent">
            <div>{icon}</div>
            <div>{text}</div>
        </div>
    )
}

export default TextComponent;