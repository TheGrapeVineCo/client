import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Button from "react-bootstrap/Button";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import WineListings from "./components/WineListings";
import NewWineForm from "./components/NewWineForm";

function App() {
  // const clickO = () => {
  //   console.log("bonjour");
  // };
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <LoginForm />
        <NewWineForm />
        <WineListings />
      </header>
    </div>
  );
}

export default App;
