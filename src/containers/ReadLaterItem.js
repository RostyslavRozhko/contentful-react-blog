import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Markdown from "react-markdown";
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText,
  CardHeader
} from "material-ui/Card";
import Close from "material-ui/svg-icons/navigation/close";

import { removeReadLater } from "../actions";

class ReadLaterItem extends Component {
  render() {
    const { id, title, desc, date, img } = this.props.post;
    const { removeReadLaterAction } = this.props;
    return (
      <Card style={{ width: "70%", margin: "10px" }}>
        <CardHeader
          title={<Link to={id}>{title}</Link>}
          subtitle={new Date(date).toLocaleDateString()}
          showExpandableButton={true}
          openIcon={<Close onClick={() => removeReadLaterAction(id)} />}
          closeIcon={<Close onClick={() => removeReadLaterAction(id)} />}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to={id}>
            <CardMedia
              style={{ flexGrow: 1, minWidth: "250xp", height: "auto" }}
            >
              <img src={img.fields.file.url} alt="img" />
            </CardMedia>
          </Link>
          <CardText style={{ flexGrow: 1 }}>
            <Link to={id}>
              <Markdown source={desc} />
            </Link>
          </CardText>
        </div>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeReadLaterAction: id => {
      dispatch(removeReadLater(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(ReadLaterItem);
