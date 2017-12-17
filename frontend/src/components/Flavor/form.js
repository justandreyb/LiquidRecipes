import React, {Component} from "react";

class FlavorForm extends Component {

  targetAction(event) {
    event.preventDefault();
    console.log("Flavor form");
    // this.props.target(this.props.flavor)
  }

  render() {
    return (
      <div className="container">
        <form>
          <label>Name</label>
          <input
            type="text"
            value={this.props.flavor.name}
            onChange={this.targetAction.bind(this)}
          />

          <button type="submit" onClick={this.targetAction.bind(this)}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export const FlavorFormComponent = FlavorForm;
