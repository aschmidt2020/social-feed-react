const LikeButton = (props) => {
   // debugger
    if(props.likedStatus){
        return (
            <span>
                <button className='btn bg-transparent' onClick={props.click}><i className="bi bi-hand-thumbs-up-fill"></i></button>
            </span>
            
            );
    }

    return( 
         <span><button className='btn bg-transparent' onClick={props.click}><i className="bi bi-hand-thumbs-up"></i></button>
        </span>
    )  
    }

export default LikeButton;