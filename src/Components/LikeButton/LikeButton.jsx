import React, { useState } from 'react';

const LikeButton = (props) => {
   const [likedStatus, setLikedStatus] = useState(false);
    debugger
    
    function handleClick(event){
        event.preventDefault();
        let oppositeState = !likedStatus;
        setLikedStatus(oppositeState);
    }

    if(likedStatus){
        return (
            <span>
                <button className='btn bg-transparent' onClick={handleClick}><i className="bi bi-hand-thumbs-up-fill"></i></button>
            </span>
            
            );
    }

    return( 
         <span><button className='btn bg-transparent' onClick={handleClick}><i className="bi bi-hand-thumbs-up"></i></button>
        </span>
    )  
    }

export default LikeButton;