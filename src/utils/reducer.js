// handles all the states used throughout app
export const reducer = (state, action) => {
  switch (action.type) {
    // populates page with wineListings
    case "setWineListings": {
      return { ...state, wineListings: action.data };
    }

    case "setAllComments": {
      return { ...state, allComments: action.data };
    }

    case "cleanState": {
      return {
        wineListings: [],
        allComments: [],
        loggedInUser: {},
      };
    }

    // adds new wine listing to wineListings
    case "addNewWineListing": {
      return {
        ...state,
        wineListings: [action.data, ...state.wineListings],
      };
    }

    case "addComment": {
      return {
        ...state,
        allComments: [action.data, ...state.allComments],
      };
    }

    // removes a comment by getting the comment id
    case "deleteComment": {
      let updatedCommentList = state.allComments.filter(
        (comment) => comment.id !== action.data
      );
      return {
        ...state,
        allComments: updatedCommentList,
      };
    }

    // updates loggedInUserValue
    case "setLoggedInUser": {
      return {
        ...state,
        loggedInUser: action.data,
      };
    }
    //updates the token value
    case "setToken": {
      return {
        ...state,
        token: action.data,
      };
    }
    default:
      return state;
  }
};
