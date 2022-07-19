import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import WineListings from "./components/WineListings";
import NewWineForm from "./components/NewWineForm";

function App() {
  // set loggedin user to empty string meaning no user is logged in
  const [loggedInUser, setLoggedInUser] = useState("");

  const activateUser = (email) => {
    setLoggedInUser(email);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navigation loggedInUser={loggedInUser} />
        <LoginForm activateUser={activateUser} />
        <NewWineForm />
        <WineListings />
      </header>
    </div>
  );
}

export default App;
