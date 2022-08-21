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
      console.log(action.data);
      return {
        ...state,
        allComments: [action.data, ...state.allComments],
      };
    }

    case "updateComment": {
      console.log(action.data.comment.commentID);
      // identifies specific comment by ID
      const comment = state.allComments.find(
        (comment) => comment.id === action.data.comment.commentID
      );
      console.log(comment);
      // contains all comments except one being updated
      const remainingComments = state.allComments.filter(
        (comment) => comment.id !== action.data.comment.commentID
      );
      const updatedComment = Object.assign(comment, action.data.comment);
      return {
        ...state,
        allComments: [updatedComment, ...remainingComments],
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
