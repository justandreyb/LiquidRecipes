import React, {Component} from "react";

class Comment extends Component {
  render() {
    return (
      <div className="container">

        <div className="container-fluid text-center">
          <div className="container-fluid">
            <div className="col-sm-10">
              <h3>{this.props.entity.name}</h3>
            </div>
          </div>

          <div className="row">

          </div>
        </div>

      </div>
    );
  }
}

export const CommentComponent = Comment;
