import React, { Component } from 'react'

class Gif extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: props.still
    }
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  render(){
    return <img role="presentation" src={this.state.url} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} />
  }

  handleMouseOver(){
    this.setState({
      url: this.props.animated
    })
  }

  handleMouseOut(){
    this.setState({
      url: this.props.still
    })
  }
}

export default Gif
