import React, { Component } from "react";

class Counter extends Component {
  render() {
    //console.log("Counter_this_props_output: ", this.props);
    //console.log("Countter_this.state output: ", this.state);
    return (
      <div>
        {/* <h4> {this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>"There are no tags"</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   // console.log("Constructor", this);
  // }

  // handleIncrement(product) {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  //   //console.log("Increment Clicked", this);
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
