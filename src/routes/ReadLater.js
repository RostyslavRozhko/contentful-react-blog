import React, { Component } from "react";
import Bundle from "../containers/Bundle";

const loadReadLaterContainer = () => import("../containers/ReadLater");

class ReadLater extends Component {
  render() {
    return <Bundle load={loadReadLaterContainer} />;
  }
}

export default ReadLater;
