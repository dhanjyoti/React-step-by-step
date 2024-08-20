import React from "react";
import { useName } from "../utils/UserContext";

const Home = () => {
    const name = useName();
  return (
    <div>
        <div>
        {name}
        </div>
        <h1>
      Home
        </h1>
    </div>
  );
};

export default Home;
