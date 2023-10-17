import { useState } from "react";
import Navbar from "./components/Navbar";
import DisplayScreen from "./components/DisplayScreen";

function App() {
  const [currentActiveMenu, setCurrentActiveMenu] = useState("User");
  const [fav, setFav] = useState([]);

  return (
    <>
      <div>
        <Navbar setCurrentActiveMenu={setCurrentActiveMenu} />
        <DisplayScreen fav={fav} currentActiveMenu={currentActiveMenu} setFav={setFav} />
      </div>
    </>
  );
}

export default App;
