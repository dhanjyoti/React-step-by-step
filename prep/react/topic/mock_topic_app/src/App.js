import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SIC from "./topics/SimpleInterestCalculator/SIC";
import Counter from "./topics/Counter/Counter";
import RealTimeDisplay from "./topics/RealTimeDisplay/RealTimeDisplay";
import Todo from "./topics/TodoApp/Todo";
import SearchProduct from "./topics/SearchProduct/SearchProduct";
import Practice from "./topics/Practice/Practice";
import GetData from "./topics/Form/GetData";
import FormValidation from "./topics/Form/FormValidation";
// import UseEffect from "./topics/Hooks/UseEffect";
// import Effect from "./topics/Hooks/Effect";
import UseMemo from "./topics/Hooks/UseMemo";
import UseReducer from "./topics/Hooks/UseReducer";
// import Higher from "./topics/HOC/Higher";
import APICalling from "./topics/API/APICalling";
// import Student from "./topics/Practice/Student";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/higher" element={<APICalling/>} />
        <Route path="/formvalidation" element={<FormValidation/>} />
        <Route path="/getdataform" element={<GetData />} />
        <Route path="/simpleinterest" element={<SIC />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/realtimedisplay" element={<RealTimeDisplay />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/searchproduct" element={<SearchProduct />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/usememo" element={<UseMemo/>} />
        <Route path="/usereducer" element={<UseReducer/>} />
      </Routes>

    </Router>
  );
}

export default App;
