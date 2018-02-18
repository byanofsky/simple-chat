import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      inputMessage: '',
    };
    this.submitMessage = this.submitMessage.bind(this);
    this.updateInputMessage = this.updateInputMessage.bind(this);
  }

  updateInputMessage(e) {
    e.preventDefault();
    this.setState({ inputMessage: e.target.value });
  }

  submitMessage(e) {
    e.preventDefault();
    this.setState({
      messages: this.state.messages.concat(this.state.inputMessage),
      inputMessage: '',
    });
  }

  render() {
    return (
      <div>
        <div id="messages">
          { this.state.messages.map((message, i) => <p key={i}>M: { message }</p>) }
        </div>
        <div id="message-form">
          <form>
            <input
              type="text"
              name="message"
              onInput={this.updateInputMessage}
              value={this.state.inputMessage}
            />
            <button onClick={this.submitMessage}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
