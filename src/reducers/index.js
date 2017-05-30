import { handleActions } from "redux-actions";
// import { Map, List } from "immutable";

const reducer = handleActions(
  {
    REQUEST_POSTS_SUCCEEDED: (state, action) => ({
      ...state,
      posts: action.posts.entities.fields,
      result: action.posts.result
    }),
    ADD_READ_LATER: (state, action) => ({
      ...state,
      readLater: [...state.readLater, action.payload]
    }),
    REMOVE_READ_LATER: (state, action) => ({
      ...state,
      readLater: state.readLater.filter(element => element !== action.payload)
    })
  },
  {
    posts: {},
    result: [],
    readLater: ["second"]
  }
);

export default reducer;
