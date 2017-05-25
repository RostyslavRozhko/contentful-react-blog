import { createAction } from "redux-actions";
import { REQUEST_POSTS_STARTED } from "../constans";

export const requestPosts = createAction(REQUEST_POSTS_STARTED);
