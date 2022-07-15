import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Button from "react-bootstrap/Button";
import Navigation from "./components/Navigation";

function App() {
  // const clickO = () => {
  //   console.log("bonjour");
  // };
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>Hello world</p> */}
        {/* <Button onClick={clickO}>Howdy ho!</Button> */}
        <Navigation />
      </header>
    </div>
  );
}

export default App;
