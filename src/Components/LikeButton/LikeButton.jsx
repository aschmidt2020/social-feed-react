const LikeButton = (props) => {
   // debugger
    if(props.likedStatus == true){
        return (
            <span><button onClick={props.click}>Liked</button></span>
            );
    }
    else{
        return(
            <span><button onClick={props.click}>Not Liked</button></span>
        )
        
    }

}
 
export default LikeButton;