import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import WineListings from "./components/WineListings";
import NewWineForm from "./components/NewWineForm";

function App() {
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
