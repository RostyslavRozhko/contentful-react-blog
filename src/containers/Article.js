import React, { Component } from "react";

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: "/sddds",
      date: "Today",
      title: "Very very very very long card title",
      img: "https://www.nature.org/cs/groups/webcontent/@web/@northcarolina/documents/media/nc-mountain-sunset.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi."
    };
  }

  componentDidMount() {}

  render() {
    const { title, date, desc, img } = this.state;
    return (
      <div>
        <div>{title}</div>
        <div>{date}</div>
        <img src={img} alt="alt" />
        <div>{desc}</div>
      </div>
    );
  }
}
