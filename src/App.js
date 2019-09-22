import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard.js';
import WordCard from './WordCard.js';

const word = "hello";
class App extends Component {
  render() {
    return (
      <div>
        <WordCard value="hello" />
      </div>
    );
  }
}
export default App;