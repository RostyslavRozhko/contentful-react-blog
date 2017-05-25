import { handleActions } from "redux-actions";
// import { Map, List } from "immutable";

const reducer = handleActions(
  {
    REQUEST_POSTS_SUCCEEDED: (state, action) =>
      Object.assign({}, state, {
        ...state,
        posts: action.posts.entities.fields,
        result: action.posts.result
      })
  },
  {
    posts: {},
    result: []
  }
);

export default reducer;
