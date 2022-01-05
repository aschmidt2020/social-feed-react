import React, { useState } from 'react';
import AddEntry from './Components/AddEntry/AddEntry';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([])
  const [post, setPost] = useState({user: 'Welcome to SocialFeed', post: 'Please start creating posts.', liked:false, disliked:false})

  function addNewEntry(post){
    let tempEntries = [post, ...entries];
    setEntries(tempEntries);
  }

  function changeLiked(entry){ //always moved liked/un-liked  posts to top of feed
    debugger

    let otherEntries = entries.filter(e => {
      if(e.user == entry.user && e.post == entry.post && e.liked == entry.liked ){
        return false;
      }
      else{return true;}
    })

    let opposite = !entry.liked;
    
    let updatedPost= {
      user: entry.user,
      post: entry.post,
      liked: opposite,
      disliked: entry.disliked
    }
    
    setPost(updatedPost);

    debugger
  
    let tempEntries = [updatedPost, ...otherEntries];
    setEntries(tempEntries);
  }

  function changeDisliked(entry){ //always moved liked/un-liked  posts to top of feed
    let otherEntries = entries.filter(e => {
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
      disliked: opposite
    }
    
    //setPost(updatedPost);

    //debugger
    
    let tempEntries = [updatedPost, ...otherEntries];
    setEntries(tempEntries);
  }
  
  return (
    <div>
      <AddEntry addNewEntry={addNewEntry}/>
      <DisplayEntries entries={entries} changeLiked={changeLiked} changeDisliked={changeDisliked}/>
    </div>
  );
}

export default App;
