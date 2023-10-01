import './App.css';
import Video from './components/Video';

function App() {

  let videos = [
    {
      title: "JS tutorial",
      views: "10K",
      time: "1 year ago",
      channel: "App Coding",
      verified: true,
    },
    {
      title: "JS Classes",
      views: "24K",
      time: "2 month ago",
      channel: "App Coder",
      verified: false,
    },
    {
      title: "React tutorial",
      views: "9M",
      time: "1 year ago",
      channel: "App Maker",
      verified: true,
    },
    {
      title: "Node tutorial",
      views: "99K",
      time: "1 month ago",
      channel: "App Guru",
      verified: false,
    }
  ]

  return (
    <div className="App">
      <div>Videos</div>
      {
        videos.map(video => <Video 
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel} 
          verified={video.verified} 
          />
        )
      }
    </div>
  );
}

export default App;
