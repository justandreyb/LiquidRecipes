import React, {Component} from "react";
import {Link} from "react-router-dom";

class RecipeItem extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/*<img src={this.props.news.img} className="img-responsive" style={imageStyle} alt={this.props.news.img}/>*/}
        <p><Link to={"/recipes/" + this.props.recipe.id}>{this.props.recipe.name}</Link></p>
      </div>
    );
  }
}

export const RecipeItemComponent = RecipeItem;
