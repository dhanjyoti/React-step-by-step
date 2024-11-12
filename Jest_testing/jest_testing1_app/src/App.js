import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>This is first React Test Case</h1>
      <input
        type="text"
        placeholder="Enter User Name"
        name="username"
        id="userId"
        value="dhanjyoti rabha"
      />
      <br />
      <br />

      <img
        title="peacock feather"
        style={{ height: "200px", width: "200px" }}
        src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
    </div>
  );
}

export default App;
