import React, { Component } from "react";
import { Link } from "react-router-dom";

import Markdown from "react-markdown";

import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { readLater: false };

    this.setReadLater = this.setReadLater.bind(this);
  }

  setReadLater() {
    const readLater = this.state.readLater;
    this.setState({
      readLater: !readLater
    });
  }

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
        <Link to={id}>
          <CardText style={{ fontSize: "18px" }}>
            <Markdown source={desc} />
          </CardText>
        </Link>
        <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
          <FlatButton
            label="Read later"
            backgroundColor={this.state.readLater ? "#F44336" : "transparent"}
            hoverColor={this.state.readLater ? "#F44336" : "transparent"}
            onClick={this.setReadLater}
          />
        </CardActions>
      </Card>
    );
  }
}
