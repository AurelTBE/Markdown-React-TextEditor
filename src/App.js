import React, { Component } from 'react'
import marked from 'marked'
import { sampleText } from './sampleText'
import './App.css';

class App extends Component {
  state = {
    text: sampleText
  }

  componentDidMount () {
    const text = localStorage.getItem('text')

    return text ? this.setState({ text }) : this.state.text
  }

  componentDidUpdate () {
    const { text } = this.state
    localStorage.setItem('text', text)
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({text})
  }

  renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              value={this.state.text}
              onChange={this.handleChange}
              className="form-control" 
              rows="35"></textarea>
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={ this.renderText(this.state.text) } />
          </div>
        </div>
      </div>    
    );
  }
}

export default App;
