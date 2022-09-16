import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";
import ProgressComp from "./components/ProgressComp";
import SortList from "./components/SortList";
import Products from "./components/Products"

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  //life cycle hooks
  constructor(){
    super();
    console.log('App - Constructor');
  }

  componentDidMount(){
    console.log('App - Mounted');
  }

  handleIncrement = (counter) => {
    const newIncrementedArray = [...this.state.counters];
    const index = newIncrementedArray.indexOf(counter);
    newIncrementedArray[index] = { ...counter };
    newIncrementedArray[index].value++;
    this.setState({ counters: newIncrementedArray });
  };

  handleDelete = (counterId) => {
    // console.log('Event Delete', counterId);
    const newCounterArray = this.state.counters.filter(
      (c) => c.id !== counterId
    );
    this.setState({ counters: newCounterArray });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
  };


  //life cycle hooks
  render(){

    console.log('App - Rendered');
  return (
    <React.Fragment>
      <ProgressComp/>
      <SortList/>
      <Products/>
      {/* <ProgressComp/> */}
      {/* <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className="container">
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}

        />
      </main> */}
    </React.Fragment>
  );
}
}

export default App;
