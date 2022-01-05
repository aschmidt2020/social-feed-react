import LikeButton from '../LikeButton/LikeButton';
import DislikeButton from '../DislikeButton/DislikeButton'
const DisplayEntries = (props) => {

    
    function toggleLiked(entry) { //change to arrow function and inside of html
       // debugger;
        props.changeLiked(entry);
         }

    function toggleDisliked(entry) { //change to arrow function and inside of html
    // debugger;
        props.changeDisliked(entry);
        }

    return (
        props.entries.map((entry) => {
            return (
                <span>
                    <h1>{entry.user}</h1>
                    <p>{entry.date}</p>
                    <p>{entry.post}</p>
                    <LikeButton click={() => toggleLiked(entry)} likedStatus={entry.liked} />
                    <DislikeButton click={() => toggleDisliked(entry)} dislikedStatus={entry.disliked} />
                </span>
            )
            
        })
     );
}
 
export default DisplayEntries; 

// <button onClick={() => toggle(entry)}>Like</button>