import React, { Component } from "react";
import { connect } from "react-redux";

import Markdown from "react-markdown";
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText,
  CardHeader
} from "material-ui/Card";

import { removeReadLater } from "../actions";

class ReadLaterItem extends Component {
  render() {
    const { id, title, desc, date, img } = this.props.post;
    return (
      <Card style={{ width: "70%", margin: "10px" }}>
        <CardHeader
          title={title}
          subtitle={new Date(date).toLocaleDateString()}
        />
        <CardMedia style={{ float: "left" }}>
          <img
            src={img.fields.file.url}
            alt="img"
            style={{ height: "250px", width: "auto" }}
          />
        </CardMedia>
        <CardText>
          <Markdown source={desc} />
        </CardText>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeReadLater: id => {
      dispatch(removeReadLater(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(ReadLaterItem);
