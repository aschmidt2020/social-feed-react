import React, { useState } from 'react';

const LikeButton = (props) => {
   const [likedStatus, setLikedStatus] = useState(false);
   
   function handleClick(event){
        debugger
        event.preventDefault();
        let oppositeState = !likedStatus;
        setLikedStatus(oppositeState);
    }

    if(likedStatus){
        return (
            <span>
                <button id={props.id} className='btn bg-transparent' onClick={handleClick}><i className="bi bi-hand-thumbs-up-fill"></i></button>
            </span>
            
            );
    }

    return( 
         <span><button id={props.id} className='btn bg-transparent' onClick={handleClick}><i className="bi bi-hand-thumbs-up"></i></button>
        </span>
    )  
    }

export default LikeButton;