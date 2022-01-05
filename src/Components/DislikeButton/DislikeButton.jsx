const DislikeButton = (props) => {
    // debugger
     if(props.dislikedStatus == true){
         return (
             <span><button onClick={props.click}>Disliked</button></span>
             );
     }
     else{
         return(
             <span><button onClick={props.click}>Not Disliked</button></span>
         )
         
     }
 
 }
  
 export default DislikeButton;