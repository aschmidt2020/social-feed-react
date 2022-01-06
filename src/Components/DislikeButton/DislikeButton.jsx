const DislikeButton = (props) => {
    // debugger
     if(props.dislikedStatus){
         return (
             <span><button className='btn bg-transparent' onClick={props.click}><i className="bi bi-hand-thumbs-down-fill"></i></button></span>
             );
     }
  
    return(
        <span><button className='btn bg-transparent' onClick={props.click}><i className="bi bi-hand-thumbs-down"></i></button></span>
     )

 }
  
 export default DislikeButton;