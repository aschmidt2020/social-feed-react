import LikeButton from '../LikeButton/LikeButton';
import DislikeButton from '../DislikeButton/DislikeButton'
const DisplayEntries = (props) => {

    
    function toggleLiked(entry) {
       let entryIndex = props.entries.findIndex(e => {
        if(e.user == entry.user && e.post == entry.post && e.liked == entry.liked ){
          return true;
        }
        else{return false;}
        })

        let otherEntries = props.entries.filter(e => {
            if(e.user == entry.user && e.post == entry.post && e.liked == entry.liked ){
              return false;
            }
            else{return true;}
        })

        let opposite = !entry.liked; //used for ease of debugging
    
        let updatedPost= {
        user: entry.user,
        post: entry.post,
        liked: opposite,
        disliked: entry.disliked,
        date: entry.date
        }

        otherEntries.splice(entryIndex, 0, updatedPost); //inserts updatedPost at entry index
        let tempEntries = otherEntries;

        props.changeLiked(tempEntries);
         }
        
    function toggleDisliked(entry) {
        let entryIndex = props.entries.findIndex(e => {
          if(e.user == entry.user && e.post == entry.post && e.liked == entry.liked ){
          return true;
          }
          else{return false;}
        })
  
        let otherEntries = props.entries.filter(e => {
          if(e.user == entry.user && e.post == entry.post && e.liked == entry.liked ){
            return false;
          }
          else{return true;}
        })
  
        let opposite = !entry.disliked;
      
        let updatedPost= {
            user: entry.user,
            post: entry.post,
            liked: entry.liked,
            disliked: opposite,
            date: entry.date
        }
      
        otherEntries.splice(entryIndex, 0, updatedPost);
        let tempEntries = otherEntries;
        props.changeDisliked(tempEntries);
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