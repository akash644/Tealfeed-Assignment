import React from "react";
import "./App.css";
import CodeEditor from "./CodeEditor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Code Editor with React</h1>
      </header>
      <main>
        <CodeEditor />
      </main>
    </div>
  );
}

export default App;
