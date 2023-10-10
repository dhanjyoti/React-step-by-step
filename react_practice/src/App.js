import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import videoDB from './data/Data';

function App() {
  const [videos, setVideos] = useState(videoDB);

  return (
    <div className="App" onClick={()=> console.log('App')}>
      <div>
        <button onClick={()=> {
          setVideos(
            [...videos,{
              id:videos.length+1,
              title: "Css tutorial",
              views: "99K",
              time: "1 month ago",
              channel: "App Guru",
              verified: false,
            }]
          );
        }}>
          Add Videos
        </button>
      </div>
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

      <Counter />
    </div>
  );
}

export default App;
