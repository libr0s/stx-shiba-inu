import React, { Component } from 'react';
import './App.css';
import ShibaForm from "./components/ShibaForm";

class App extends Component {

  state = {
    count: 0,
    type: 'random',
    buttonState: '',
  };

  render() {
    return (
      <div>
          <ShibaForm
            handleChangeCount={this.handleChangeCount}
            handleChangeType={this.handleChangeType}
            handleSubmit={this.handleSubmit}
            typeValue={this.state.type}
            countValue={this.state.count}
            isFetching={this.state.buttonState}
          />
      </div>
    );
  }

  handleChangeCount = (event) => {
    const count = event.target.value;
    this.setState({count});
  };

  handleChangeType = (event) => {
    const type = event.target.value;
    this.setState({type});
  };

  handleSubmit = () => {
    console.log(this.state);
  }

}

export default App;
