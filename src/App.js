import React, { useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import WineListings from "./components/WineListings";
import NewWineForm from "./components/NewWineForm";
import Ratings from "./components/Ratings";
// import NewCommentForm from "./components/Navigation";
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
import axios from "axios";

function App() {
  // defines initial state
  const initialState = {
    wineListings: [],
    allComments: [],
    loggedInUser: "",
  };

  // returns an array with 2 elements: store (initial state) & dispatch to handle state
  const [store, dispatch] = useReducer(reducer, initialState);
  const { wineListings, loggedInUser } = store;

  const activateUser = (email) => {
    // setLoggedInUser(email);
    dispatch({
      type: "setLoggedInUser",
      data: email,
    });
  };

  // adds new wine listing to list of wine listings
  const addNewWineListing = ({
    brand,
    grape_variety,
    year,
    category,
    country,
    region,
    description,
  }) => {
    const newListing = {
      brand: brand,
      grape_variety: grape_variety,
      year: year,
      category: category,
      country: country,
      region: region,
      description: description,
      id: wineListings[0].id + 1,
    };
    dispatch({
      type: "addNewWineListing",
      data: newListing,
    });
  };

  // loads initialWineListings and initialCommentList in componentDidMount
  useEffect(() => {
    axios.get("http://localhost:4000/wine_listings").then((response) => {
      console.log(response);
      dispatch({
        type: "setWineListings",
        data: response.data,
      });
      // dispatch({
      //   type: "setAllComments",
      //   data: initialCommentList,
      // });
    });
    // fetch("http://localhost:4000/wine_listings")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    // dispatch({
    //   type: "setWineListings",
    //   data: initialWineListings,
    // });
    // dispatch({
    //   type: "setAllComments",
    //   data: initialCommentList,
    // });
  }, []);

  // loads initialWineListings and initialCommentList in componentDidMount
  useEffect(() => {
    axios.get("http://localhost:4000/comments").then((response) => {
      console.log(response);
      // dispatch({
      //   type: "setWineListings",
      //   data: response.data,
      // });
      dispatch({
        type: "setAllComments",
        data: response.data,
      });
    });
    // fetch("http://localhost:4000/wine_listings")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    // dispatch({
    //   type: "setWineListings",
    //   data: initialWineListings,
    // });
    // dispatch({
    //   type: "setAllComments",
    //   data: initialCommentList,
    // });
  }, []);

  return (
    <div className="App" data-testid="app-element">
      {/* Need to include logic for only admin to have access to NewWineForm */}

      {/* Includes all components using global state in state context provider */}
      <StateContext.Provider value={{ store, dispatch }}>
        {/* provides SPA routing in FE */}
        <Router>
          <header className="App-header">
            <Navigation
              loggedInUser={loggedInUser}
              activateUser={activateUser}
            />
          </header>
          <Routes>
            <Route path="/" element={<Navigate to="wineListings" replace />} />
            <Route path="wineListings" element={<WineListings />} />
            <Route path="about" element={<About />} />
            <Route
              path="login"
              element={<LoginForm activateUser={activateUser} />}
            />
            <Route path="ratings" element={<Ratings />} />
            {/* Need to include logic for only admin to have access to NewWineForm */}
            <Route
              path="newListing"
              element={<NewWineForm addNewWineListing={addNewWineListing} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </StateContext.Provider>
    </div>
  );
}

export default App;
