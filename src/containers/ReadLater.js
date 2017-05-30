import React, { Component } from "react";
import { connect } from "react-redux";
import { requestPosts } from "../actions";
import { getReadLaterPosts } from "../selectors";

import ReadLaterItem from "./ReadLaterItem";

class ReadLater extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {this.props.posts.map(post => (
          <ReadLaterItem key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: getReadLaterPosts(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => {
      dispatch(requestPosts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadLater);
