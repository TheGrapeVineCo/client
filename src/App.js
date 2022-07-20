import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import WineListings from "./components/WineListings";
import NewWineForm from "./components/NewWineForm";
import initialWineListings from "./data/wine-listings.json";

function App() {
  // set loggedin user to empty string meaning no user is logged in
  const [loggedInUser, setLoggedInUser] = useState("");
  const [wineListings, setWineListings] = useState([]);

  const activateUser = (email) => {
    setLoggedInUser(email);
  };

  useEffect(() => {
    setWineListings(initialWineListings);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navigation loggedInUser={loggedInUser} activateUser={activateUser} />

        {/* When no user signed in, render loginForm */}
        {!loggedInUser && <LoginForm activateUser={activateUser} />}

        {/* Need to include logic for only admin to have access to NewWineForm */}
        <NewWineForm />
        <WineListings wineListings={wineListings} />
      </header>
    </div>
  );
}

export default App;
