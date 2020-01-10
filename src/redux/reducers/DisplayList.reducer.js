import * as actionTypes from "../actionConstants";
const initialState = {
  posts: [],
  currentPost: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_POST: {
      return {
        ...state,
        posts: action.posts
      };
    }
    case actionTypes.GET_POST: {
      return {
        ...state,
        currentPost: action.post
      };
    }
    case actionTypes.UPDATE_POST: {
      let updateState = action.oldState;
      return {
        ...state,
        posts: updateState.map(post =>
          post.id === action.updatedObject.id ? action.updatedObject : post
        )
      };
    }

    default:
      return state;
  }
};

export default reducer;
