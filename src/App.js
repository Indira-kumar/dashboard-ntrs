import React from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import ProjectTitle from "./components/ProjectTitle";
import "semantic-ui-css/semantic.min.css";
function App() {
  return (
    <div>
      <ProjectTitle />
      <DashBoard />
    </div>
  );
}

export default App;
