import React, { Component } from "react";
import AppBar from "material-ui/AppBar";

export default class Header extends Component {
  render() {
    return <AppBar title="Blog" showMenuIconButton={false} />;
  }
}
