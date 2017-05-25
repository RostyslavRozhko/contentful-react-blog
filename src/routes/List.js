import React, { Component } from "react";
import Bundle from "../containers/Bundle";

const loadListContainer = () => import("../containers/List");

class List extends Component {
  render() {
    return <Bundle load={loadListContainer} />;
  }
}

export default List;
