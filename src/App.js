import React, {Component} from 'react';
import ShibaForm, {animalTypes} from "./components/ShibaForm";
import {ShibaList} from "./components/ShibaList";
const axios = require('axios');
const corsBypass = 'https://cors-anywhere.herokuapp.com/';

class App extends Component {

  state = {
    count: 0,
    type: 'random',
    buttonState: '',
    animals: [],
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
          buttonState={this.state.buttonState}
        />
        <ShibaList
          animals={this.state.animals}
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
    let type = this.state.type;
    if (type === 'random') {
      type = animalTypes[Math.floor(Math.random() * 3)];
    }

    let count = this.state.count;
    if (count < 1 || count > 10) {
      count = 1;
    }

    this.setState({type, count}, this.fetchAnimals(type, count));
  };

  fetchAnimals = (type, count) => {
    axios.get(`${corsBypass}http://shibe.online/api/${type}?count=${count}`)
      .then((response) => {
        this.setState({
          animals: response.data,
          buttonState: 'success',
        }, () => setTimeout(() => this.setState({buttonState: ''}), 500));
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          animals: [],
          buttonState: 'error',
        });
      }, () => setTimeout(() => this.setState({buttonState: ''}), 500));
  }

}

export default App;
