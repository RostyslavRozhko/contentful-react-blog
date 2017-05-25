import React, { Component } from "react";
import { connect } from "react-redux";
import { requestPosts } from "../actions";
import { getPosts } from "../selectors";

import ListItem from "./ListItem";

class List extends Component {
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
        {this.props.posts.map((post, key) => (
          <ListItem key={key} post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: getPosts(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => {
      dispatch(requestPosts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
