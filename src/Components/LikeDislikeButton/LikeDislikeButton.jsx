import React, { useState } from 'react';

const LikeDislikeButton = (props) => {
    const [likedStatus, setLikedStatus] = useState(false);
    const [dislikedStatus, setDislikedStatus] = useState(false);
   
    function handleClickLike(event){
        event.preventDefault();
        debugger
        if(likedStatus == true){
            setLikedStatus(false);
            setDislikedStatus(false)
        }
        else if(likedStatus == false){
            let oppositeState = !likedStatus;
            setDislikedStatus(likedStatus);
            setLikedStatus(oppositeState);
        }
        debugger 
    }

    function handleClickDislike(event){
        event.preventDefault();
        debugger
        if(dislikedStatus == true){
            setLikedStatus(false);
            setDislikedStatus(false);
        }
        else if(dislikedStatus == false){
            let oppositeState = !dislikedStatus;
            setLikedStatus(dislikedStatus);
            setDislikedStatus(oppositeState);
        }
        debugger
    }

    
    if(likedStatus==true && dislikedStatus==false){
        return (
            <span>
                <button className='btn bg-transparent' onClick={handleClickLike} value={likedStatus}><i className="bi bi-hand-thumbs-up-fill"></i></button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn bg-transparent' onClick={handleClickDislike} value={dislikedStatus}><i className="bi bi-hand-thumbs-down"></i></button>
            </span>
            
            );
    }
    
    else if(likedStatus==false && dislikedStatus==true){
        return (
            <span>
                <button className='btn bg-transparent' onClick={handleClickLike} value={likedStatus}><i className="bi bi-hand-thumbs-up"></i></button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn bg-transparent' onClick={handleClickDislike} value={dislikedStatus}><i className="bi bi-hand-thumbs-down-fill"></i></button>
            </span>
        )
    } 

    return(
        <span>
            <button className='btn bg-transparent' onClick={handleClickLike} value={likedStatus}><i className="bi bi-hand-thumbs-up"></i></button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btn bg-transparent' onClick={handleClickDislike} value={dislikedStatus}><i className="bi bi-hand-thumbs-down"></i></button>
        </span>
    )

    }


export default LikeDislikeButton;