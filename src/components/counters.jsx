import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    //life cycle hook
  render() {
    const {onReset, counters, onDelete, onIncrement} = this.props

    console.log('Counters - Rendered');
    
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn sm m-2"
        >
          Reset
        </button>

        {counters.map((counter) => (
          <Counter
            //this key is used by react internally we cannot access
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            //value and id are properties of same objects i.e counter but we are sending two different props for each
            //instead we can simply pass the counter object
            /* 
            value={counter.value}
            //that is why we are using separate id attribute
            id={counter.id}
            */
            counter={counter}
          >
            {/* another way to sending children */}
            {/* <h5>Counter #{counter.id}</h5> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
