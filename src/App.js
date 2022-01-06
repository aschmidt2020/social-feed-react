import React, { useState } from 'react';
import AddEntry from './Components/AddEntry/AddEntry';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import './App.css'

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
      <div className='container'>
        <div className='row'>
        <h1 style={{'margin-top': '1em'}}>Social<small className='text-muted'>Feed</small></h1>
        </div>

        <div className='row' style={{'margin-top': '1em'}, {'margin-bottom': '1em'}}>
          <div className='col center-text'>
          <AddEntry addNewEntry={addNewEntry}/>
        </div>

        <div className='col'>
          <DisplayEntries entries={entries} changeLiked={changeLiked} changeDisliked={changeDisliked}/>
        </div>

        </div>



      </div>
    </div>
  );
}

export default App;
