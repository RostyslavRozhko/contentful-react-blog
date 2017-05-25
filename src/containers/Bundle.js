import React, { Component } from "react";
import Loading from "./Loading";

class Bundle extends Component {
  state = {
    LoadedComponent: null
  };

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      LoadedComponent: null
    });

    props.load().then(mod => {
      this.setState({
        LoadedComponent: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    const { LoadedComponent } = this.state;

    return LoadedComponent ? <LoadedComponent {...this.props} /> : <Loading />;
  }
}

export default Bundle;
