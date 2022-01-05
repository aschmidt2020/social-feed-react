import LikeButton from "../LikeButton/LikeButton";

const DisplayEntries = (props) => {

    
    function toggle(entry) { //change to arrow function and inside of html
       // debugger;
        props.changeLiked(entry);
         }

    return (
        props.entries.map((entry) => {
            return (
                <span>
                    <h1>{entry.user}</h1>
                    <p>{entry.post}</p>
                    <LikeButton click={() => toggle(entry)} likedStatus={entry.liked} />
                </span>
            )
            
        })
     );
}
 
export default DisplayEntries; 

// <button onClick={() => toggle(entry)}>Like</button>