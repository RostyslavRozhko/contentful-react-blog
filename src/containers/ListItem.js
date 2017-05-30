import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Markdown from "react-markdown";

import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import { addReadLater, removeReadLater } from "../actions";

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { readLater: false };
  }

  setReadLater = () => {
    const readLater = this.state.readLater;
    const { addReadLater, removeReadLater } = this.props;
    const id = this.props.post.id;

    this.setState({
      readLater: !readLater
    });

    if (!readLater) {
      addReadLater(id);
    } else {
      removeReadLater(id);
    }
  };

  render() {
    const { id, title, date, desc, img } = this.props.post;
    return (
      <Card style={{ width: "70%", margin: "10px" }}>
        <CardTitle
          title={<Link to={id}>{title}</Link>}
          subtitle={new Date(date).toLocaleDateString()}
        />
        <Link to={id}>
          <CardMedia>
            <img src={img.fields.file.url} alt="img" />
          </CardMedia>
        </Link>
        <CardText style={{ fontSize: "18px" }}>
          <Link to={id}>
            <Markdown source={desc} />
          </Link>
        </CardText>
        <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
          <FlatButton
            label="Read later"
            backgroundColor={this.state.readLater ? "#F44336" : "transparent"}
            hoverColor={this.state.readLater ? "#F44336" : "transparent"}
            onTouchTap={this.setReadLater}
          />
        </CardActions>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReadLater: id => {
      dispatch(addReadLater(id));
    },
    removeReadLater: id => {
      dispatch(removeReadLater(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(ListItem);
