import React, {Component} from "react";
import {LikeComponent} from "../Like";
import {CommentsComponent} from "../Comments";

class EntitySingle extends Component {
  render() {
    return (
      <div className="container">
        <h2>{this.props.news.title}</h2>
        <p>{this.props.news.text}</p>
        <div className="social">
          <LikeComponent
            likes={this.props.likes}
          />
          <CommentsComponent
            comments={this.props.comments}
          />
        </div>
      </div>
    );
  }
}

export const NewsSingleComponent = EntitySingle;
