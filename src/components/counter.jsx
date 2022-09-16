import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevPops, prevState) {
    console.log("Previous Props", prevPops);
    console.log("Previous State", prevState);

    if (prevPops.counter.value !== this.props.counter.value) {
      //ajax call and get new data from the server
      // console.log('data changed');
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  //removing local state
  //   state = {
  //     value: this.props.counter.value,
  //     imageUrl: "https://picsum.photos/200",
  //     tags: ["tag1"],
  //   };

  //foraml way

  //   constructor(){
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  //conditional rendering
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }
  //formal way
  //   handleIncrement() {
  //     console.log("Increment Clicked", this);
  //   }

  //new way
  //removing local state
  //   handleIncrement = (prodduct) => {
  //     console.log(prodduct);
  //     //this is not undefined here
  //     // console.log('Increment Clicked!', this);

  //     //this doesn't work in react
  //     // this.state.count++;

  //     //this make a asynchronous call to render method i.e. in future
  //     this.setState({ value: this.state.value + 1 });
  //   };

  render() {
    console.log(this.props);

    console.log("Counter - Rendered");

    return (
      <div>
        {/* another way of getting children */}
        {/* {this.props.children} */}
        <h5>Item # {this.props.counter.id}</h5>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //   onClick={this.handleIncrement}
          //removing local state
          //   onClick={() => this.handleIncrement({ id: 1 })}
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

      //   <React.Fragment>
      //     {/* another way for conditional rendering */}
      //     {this.state.tags.length === 0 && 'Please add a new tag!'}
      //     {this.renderTags()}

      //     <img src={this.state.imageUrl} alt="" />

      //     <span style={this.styles} className={this.getBadgeClasses()}>
      //       {this.formatCount()}
      //     </span>
      //     <span style={this.styles} className="badge badge-primary m-2">
      //       {this.formatCount()}
      //     </span>
      //     <button style={{ fontSize: 30 }} className="btn btn-secondary btn-sm">
      //       Increase
      //     </button>
      //      <ul>
      //         {this.state.tags.map(tag => <li key={tag}> {tag} </li>)}
      //     </ul>
      //   </React.Fragment>
    );
  }

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
