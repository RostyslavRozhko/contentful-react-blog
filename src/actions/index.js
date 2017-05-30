import { createAction } from "redux-actions";
import {
  REQUEST_POSTS_STARTED,
  ADD_READ_LATER,
  REMOVE_READ_LATER
} from "../constans";

export const requestPosts = createAction(REQUEST_POSTS_STARTED);

export const addReadLater = createAction(ADD_READ_LATER);
export const removeReadLater = createAction(REMOVE_READ_LATER);
