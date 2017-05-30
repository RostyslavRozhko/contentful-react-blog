export const getPosts = state => {
  if (state.result) {
    const result = state.result;
    return result.map(id => state.posts[id]);
  } else {
    return [];
  }
};

export const getReadLaterPosts = state => {
  if (state.readLater) {
    const result = state.readLater;
    let s = result.map(id => state.posts[id]);
    return s;
  } else {
    return [];
  }
};
