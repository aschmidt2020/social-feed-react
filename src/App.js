import React, { useState } from 'react';
import AddEntry from './Components/AddEntry/AddEntry';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{user: 'Welcome to SocialFeed', post: 'Please start creating posts.', liked:false, disliked:false, date:'01-05-2022'}])
  //const [post, setPost] = useState({user: 'Welcome to SocialFeed', post: 'Please start creating posts.', liked:false, disliked:false, date:'01-05-2022'})

  function addNewEntry(post){
    let tempEntries = [post, ...entries];
    setEntries(tempEntries);
  }

  function changeLiked(tempEntries){ 
    setEntries(tempEntries);
  }

  function changeDisliked(tempEntries){
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
