import './PlayButton.css';

function PlayButton ({message, children, onSmash}){

    function handleClick(){
        onSmash();
    }
    return (
        <button onClick={handleClick}>{children}</button>
    )
}

export default PlayButton;