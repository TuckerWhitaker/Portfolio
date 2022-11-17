import "./App.css";
import Intro from "./components/intro";
import Project from "./components/project";
function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <h1 className="Title">Projects: </h1>
      <div className="ProjectContainer">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default App;
