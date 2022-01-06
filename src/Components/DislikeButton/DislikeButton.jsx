import React, { useState } from 'react';

const DislikeButton = (props) => {
    const [dislikedStatus, setDislikedStatus] = useState(false);
    
    function handleClick(event){
        event.preventDefault();
        let oppositeState = !dislikedStatus;
        setDislikedStatus(oppositeState);
    }

    //debugger

     if(dislikedStatus){
         return (
             <span><button id={props.id} className='btn bg-transparent' onClick={handleClick}><i className="bi bi-hand-thumbs-down-fill"></i></button></span>
             );
     }
  
    return(
        <span><button id={props.id} className='btn bg-transparent' onClick={handleClick}><i className="bi bi-hand-thumbs-down"></i></button></span>
     )

 }
  
 export default DislikeButton;