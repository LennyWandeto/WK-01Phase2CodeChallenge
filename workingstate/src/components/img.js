import React, {useState} from 'react'
import './img.css'

function Image() {
    const [height, setHeight] = useState(20);
    const [width, setWidth] = useState(10);

    const HeightChangeHandler = (event) =>{
        setHeight(parseInt(event.target.value));
    }
    const WidthChangeHandler = (event) =>{
        setWidth(parseInt(event.target.value));
    }



  return (

    
    <div>
        <label>Height</label>
        <input 
        min="100"
        max="500"
        value={height}
        onChange = {HeightChangeHandler}
        type="range"
         ></input>
        <label>Width</label>
        <input 
        min="100"
        max="500"
        value={width}
        onChange={WidthChangeHandler}
        type="range"
        ></input>
        <br/>
        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUy0VUrZoCd0dfpxJKMfUzCjoYdAcYkJCrRGDzlOLWyA&s" id="image" 
        style={{
            height: `${height}px`,
            width: `${width}px`,
        }}></img>
    </div>
  )
}

export default Image