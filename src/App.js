import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import WineListings from "./components/WineListings";
import NewWineForm from "./components/NewWineForm";
import Ratings from "./components/Ratings";
import Comment from "./components/Comment";
import NewCommentForm from "./components/Navigation";
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

function App() {
  // set loggedin user to empty string meaning no user is logged in
  const [loggedInUser, setLoggedInUser] = useState("");
  const [wineListings, setWineListings] = useState([]);

  /* setup but may be redundant - need to look into this further */
  const [allComments, setAllComments] = useState(initialCommentList);

  const activateUser = (email) => {
    setLoggedInUser(email);
  };

  /* setup but may be redundant - need to look into this further */
  const addComment = (text) => {
    const comment = {
      // wine_listing_id: ,
      text: text,
      user: loggedInUser,
      id: allComments[allComments.length].id + 1,
    };
    setAllComments((allComments) => [comment, ...allComments]);
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
    setWineListings((wineListings) => [newListing, ...wineListings]);
  };

  // loads initialWineListings in componentDidMount
  useEffect(() => {
    setWineListings(initialWineListings);
    setAllComments(initialCommentList);
  }, []);

  // loads initialCommentList in componentDidMount
  // useEffect(() => {
  //   setCommentList(initialCommentList);
  // }, []);

  return (
    <div className="App">
      {/* When no user signed in, render loginForm */}
      {/* {!loggedInUser && <LoginForm activateUser={activateUser} />} */}

      {/* Need to include logic for only admin to have access to NewWineForm */}
      {/* <NewWineForm addNewWineListing={addNewWineListing} /> */}
      {/* <WineListings wineListings={wineListings} /> */}

      {/* provides SPA routing in FE */}
      <Router>
        <header className="App-header">
          <Navigation loggedInUser={loggedInUser} activateUser={activateUser} />
        </header>
        <Routes>
          <Route path="/" element={<Navigate to="wineListings" replace />} />
          <Route
            path="wineListings"
            element={
              <WineListings
                loggedInUser={loggedInUser}
                wineListings={wineListings}
                allComments={allComments}
              />
            }
          />
          {/* setup but may be redundant - need to look into this further */}
          {/* <Route path="comments/new" element={<Comment />} /> */}
          <Route path="about" element={<About />} />
          {/* setup the below commented out lines but may be redundant - need to look into this further */}
          {/* When no user signed in, render loginForm */}
          {/* <Route
            path="comment/new"
            element={
              loggedInUser ? (
                <NewCommentForm
                  loggedInUser={loggedInUser}
                  addComment={addComment}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          /> */}
          <Route
            path="login"
            element={<LoginForm activateUser={activateUser} />}
          />
          <Route path="ratings" element={<Ratings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
