import React, {Component} from 'react';
import ProgressButton from "react-progress-button";
import "react-progress-button.css";

const animalTypes = ['shibes', 'cats', 'birds', 'random'];

class ShibaForm extends Component {
  render() {
    return (
      <div className="is-centered" style={{background: "#EBEBEB", padding: "1em"}}>
        <div className="columns is-centered">
          <div className="column is-one-third has-text-centered">
            <label className="label">Count</label>
            <div>
              <input
                className="input"
                type="number"
                min="1"
                max="10"
                onChange={this.props.handleChangeCount}
                value={this.props.countValue}
              />
            </div>
          </div>
          <div className="column is-one-third has-text-centered">
            <label className="label">Type</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  onChange={this.props.handleChangeType}
                  value={this.props.typeValue}
                >
                  { animalTypes.map((val, index) => <option key={index}>{ val }</option>) }
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="has-text-centered column is-one-quarter">
            <ProgressButton onClick={this.props.handleSubmit} state={this.props.buttonState}>
              Get some <em>{this.props.typeValue}</em>
            </ProgressButton>
          </div>
        </div>
      </div>
    );
  }
}

export default ShibaForm;