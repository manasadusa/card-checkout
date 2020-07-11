import React from 'react';
import './Title.css'
const Title=(props)=>{
    return(
        <div className="header">
        <div className="title">{props.title}</div> 
        </div> 
    )
}
export default Title;