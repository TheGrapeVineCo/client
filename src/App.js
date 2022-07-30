import React, { useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import WineListings from "./components/WineListings";
import NewWineForm from "./components/NewWineForm";
import Ratings from "./components/Ratings";
import initialWineListings from "./data/wine-listings.json";
import initialCommentList from "./data/comments.json";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import About from "./components/About";
import NotFound from "./components/NotFound";
import { reducer } from "./utils/reducer";
import { StateContext } from "./utils/stateContext";
import SignUpForm from "./components/SignUpForm";

function App() {
  // defines initial state
  const initialState = {
    wineListings: [],
    allComments: [],
    loggedInUser: "",
  };

  // returns an array with 2 elements: store (initial state) & dispatch to handle state
  const [store, dispatch] = useReducer(reducer, initialState);

  // loads initialWineListings and initialCommentList in componentDidMount
  useEffect(() => {
    // fetch
    dispatch({
      type: "setWineListings",
      data: initialWineListings,
    });
    dispatch({
      type: "setAllComments",
      data: initialCommentList,
    });
  }, []);

  return (
    <div className="App" data-testid="app-element">
      {/* Includes all components using global state in state context provider */}
      <StateContext.Provider value={{ store, dispatch }}>
        {/* provides SPA routing in FE to navigate across site */}
        <Router>
          <header className="App-header">
            <Navigation />
          </header>
          <Routes>
            <Route path="/" element={<Navigate to="wineListings" replace />} />
            <Route path="wineListings" element={<WineListings />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignUpForm />} />
            <Route path="ratings" element={<Ratings />} />
            {/* Need to include logic for only admin to have access to NewWineForm */}
            <Route path="newListing" element={<NewWineForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </StateContext.Provider>
    </div>
  );
}

export default App;
