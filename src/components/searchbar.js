import React, { Component } from 'react';
import Axios from 'axios'

class SearchBar extends Component {

  constructor(props){
    super(props)
    this.state = { term: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleReturn = this.handleReturn.bind(this)
    this.clearInputField = this.clearInputField.bind(this)
    this.search = this.search.bind(this)
  }

  render(){
    return (
      <div className="col-xs-6">
        <input className="form-control" key="searchbar" placeholder="Search" onKeyPress={this.handleReturn} onChange={this.handleChange} value={this.state.term}/>
        <div className="btn btn-default" onClick={this.search}>Get Gifs!</div>
      </div>
    )
  }

  search(){
    var that = this
    let searchTerm = this.state.term.replace(" ", "+")
    Axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`).then(function(resp){
      that.props.updateGifResults(resp.data.data)
    })
    this.clearInputField()
  }

  handleChange(event){
    this.setState({
      term: event.target.value
    })
  }

  clearInputField(){
    this.setState({term: ''})
  }

  handleReturn(e){
    if (e.key === "Enter"){
      this.search()
    }
  }

}

export default SearchBar
