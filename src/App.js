import React from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import ProjectTitle from "./components/ProjectTitle";
import TextExplanation from "./components/TextExplanation";
import "semantic-ui-css/semantic.min.css";
function App() {
  return (
    <div>
      <ProjectTitle />
      <TextExplanation />
      <DashBoard />
    </div>
  );
}

export default App;
