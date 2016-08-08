import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import SearchBar from './searchbar'
import GifContainer from './gifcontainer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {gifs: []}
    this.updateGifResults = this.updateGifResults.bind(this)
  }
  render() {
    return (
      <div className="App container">
        <SearchBar updateGifResults={this.updateGifResults}/>
        <GifContainer gifs={this.state.gifs}/>
      </div>
    );
  }

  updateGifResults(gifs){
    this.setState({gifs: gifs})
  }

}

export default App;
