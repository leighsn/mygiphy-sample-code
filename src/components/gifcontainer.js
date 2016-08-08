import React from 'react'
import Gif from './gif'


const GifContainer = (props) => {
  var gifList = props.gifs.map((gif, idx)=>{
    return <Gif still={gif.images.fixed_height_still.url} animated={gif.images.fixed_height.url} key={idx}/>
  })

  return (
    <div className="col-xs-12">
      {gifList}
    </div>
  )
}

export default GifContainer
