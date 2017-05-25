export const getPosts = state => {
  if (state.result) {
    const result = state.result;
    return result.map(id => state.posts[id]);
  } else {
    return [];
  }
};
