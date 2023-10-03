import './App.css';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import videos from './data/Data';

function App() {

  return (
    <div className="App">
      <div>Videos</div>
      {
        videos.map(video => <Video 
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel} 
          verified={video.verified} 
          id={video.id}
          />
        )
      }
      <div style={{clear:'both'}}>
        <PlayButton onSmash={()=>console.log('Play')} message="play-msg">Play</PlayButton>
        <PlayButton onSmash={()=>alert('Playyy')} message="pause-msg">Pause</PlayButton>
      </div>
    </div>
  );
}

export default App;
