const DislikeButton = (props) => {
    // debugger
     if(props.dislikedStatus == true){
         return (
             <span><button className='btn bg-transparent' onClick={props.click}><i className="bi bi-hand-thumbs-down-fill"></i></button></span>
             );
     }
     else{
         return(
             <span><button className='btn bg-transparent' onClick={props.click}><i className="bi bi-hand-thumbs-down"></i></button></span>
         )
         
     }
 
 }
  
 export default DislikeButton;