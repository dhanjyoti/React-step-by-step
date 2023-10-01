import './App.css';
import Video from './components/Video';

function App() {

  let obj = {
    title: "JS tutorial",
    views: "999K",
    time: "2 year ago",
    channel: "App Coding",
    verified: true,
  };

  return (
    <div className="App">
      <div>Videos</div>
      <Video {...obj} />
      <Video title="Node JS tutorial" views="100K" time="1 year ago" Channel="Coding boy" verified={false}/>
      <Video title="React JS tutorial" views="100M" time="1 month ago" Channel="Coding Guru" verified={false} />
      <Video {...obj} />
    </div>
  );
}

export default App;
