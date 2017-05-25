import React, { Component } from "react";
import Bundle from "../containers/Bundle";

const loadArticleContainer = () => import("../containers/Article");

class Article extends Component {
  render() {
    return <Bundle load={loadArticleContainer} />;
  }
}

export default Article;
