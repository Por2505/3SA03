import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
var word = ["Hello", "Play", "Welcome"];

class App extends Component {
  randomWord(word) {
    return word[Math.floor(Math.random() * word.length)];
  }
  render() {
    return (
    <div className="App">
      <div className="font">My Card Game</div>
      <WordCard value={this.randomWord(word)}/>
        <div id="textShow" className="fontm"></div>
        <div id="gameEnd" className="fontm"></div>
        <div className="fonts">Srawadee Noktawee 6035512061</div>
    </div>
    );
  }
}
export default App;