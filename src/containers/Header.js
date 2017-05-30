import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Book from "material-ui/svg-icons/action/book";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <AppBar
        title={<Link to="/">Blog</Link>}
        showMenuIconButton={false}
        iconElementRight={
          <Link to="readLater"><Book style={{ marginTop: "8px" }} /></Link>
        }
      />
    );
  }
}
