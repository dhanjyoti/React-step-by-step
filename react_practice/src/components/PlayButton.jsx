import './PlayButton.css';

function PlayButton ({message, children, onPlay, onPause}){
    let playing = false; // don't use this approach
    function handleClick(){
        if(playing) onPause();
        else onPlay();

        playing = !playing;
    }
    return (
        <button onClick={handleClick}>{children} : {playing ? '>': '||'}</button>
    )
}

export default PlayButton;