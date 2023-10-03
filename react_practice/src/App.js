import './App.css';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import videos from './data/Data';

function App() {

  return (
    <div className="App" onClick={()=> console.log('App')}>
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
          >
          <PlayButton 
            onPlay={()=>console.log('Play',video.title)} 
            onPause={()=>console.log('Pause',video.title)}>
              {video.title}
          </PlayButton>
          </Video>
        )
      }
      <div style={{clear:'both'}}>
        {/* <PlayButton onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')} message="play-msg">Play</PlayButton> */}
        {/* <PlayButton onSmash={()=>alert('Playyy')} message="pause-msg">Pause</PlayButton> */}
      </div>
    </div>
  );
}

export default App;
