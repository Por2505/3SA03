import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
let count = 0
const prepareStateFromWord = (given_word) => {
 let word = given_word
 let chars = _.shuffle(Array.from(word))
 return {
 word,
 chars,
 attempt: 1,
 guess: [],
 completed: false
 }
}
let data;
export default class WordCard extends Component {

    componentWillMount(){
        data = prepareStateFromWord(this.props.value);
        this.setState({
            word:data.word,
            chars: data.chars,
            attempt: data.attempt,
            guess: data.guess,
            completed: data.completed,
        })
    }
    activationHandler = (c) => {
        let guess = [...this.state.guess, c]
        this.setState({guess})
        document.getElementById("textShow").innerHTML = guess.join('').toString()
        if(guess.length == this.state.chars.length){
        if(guess.join('').toString() == this.state.word){
        this.setState({guess: [], completed: true})
        document.getElementById("gameEnd").innerHTML = "You Win"
        }else{
        document.getElementById("gameEnd").innerHTML = "Game Over" 
        this.setState({guess: [], attempt: this.state.attempt + 1})
        }
        }
       }

    render() {
    
    return (
    <div>
    { Array.from(data.chars).map((c, i) => <CharacterCard value={c} key={i} attempt={this.state.attempt}
    activationHandler={this.activationHandler}/>) }
    </div>
    );
    }
}