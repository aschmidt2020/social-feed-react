import React, { useState } from 'react';
import AddEntry from './Components/AddEntry/AddEntry';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import './App.css'

function App() {

  const [entries, setEntries] = useState([
        {timeStamp: "0000-00-00 00:00:00:000",
         user: 'Welcome to SocialFeed', 
         post: 'Please start creating posts.', 
         date:'and make sure to have fun!',
         replySection: []
        }])

  function addNewEntry(post){
    let tempEntries = [post, ...entries];
    setEntries(tempEntries);
  }

  function deleteEntry(post){
    let tempEntries = [...entries]
    let entryToBeDeletedIndex = entries.findIndex(e => {
      if(e.timeStamp == post.timeStamp){ //used timeStamp to identify since it should be unique for each post
        return true;
      }
      else{
        return false;
      }
    })

    tempEntries.splice(entryToBeDeletedIndex, 1); //deleted entry at specified index
    setEntries(tempEntries);
  }

  function addReply(entry){
    //debugger
    let tempEntries = [...entries];
    let entryToBeDeletedIndex = entries.findIndex(e => {
      if(e.timeStamp == entry.timeStamp){ //used timeStamp to identify since it should be unique for each post
        return true;
      }
      else{
        return false;
      }
    })

    //debugger
    tempEntries.splice(entryToBeDeletedIndex, 1); //deletes old entry
    tempEntries.splice(entryToBeDeletedIndex, 0, entry); //replaces with new entry
    setEntries(tempEntries)
  }
  
  function deleteReply(entry){
     //debugger
     let tempEntries = [...entries];
     let entryToBeDeletedIndex = entries.findIndex(e => {
       if(e.timeStamp == entry.timeStamp){ //used timeStamp to identify since it should be unique for each post
         return true;
       }
       else{
         return false;
       }
     })
 
     debugger
     tempEntries.splice(entryToBeDeletedIndex, 1); //deletes old entry
     tempEntries.splice(entryToBeDeletedIndex, 0, entry); //replaces with new entry
     setEntries(tempEntries)
  }

  return (
    <div>
      <div className='container'>
        <div className='row sticky-top' style={{'marginTop': '2em'}}>
          <h1 style={{'backgroundColor': '#a3aeba'}}>&nbsp;&nbsp;Social
          <small className='text-white'>Feed<i className="bi bi-chat-square position-absolute" style={{"fontSize": "1rem"}}></i></small></h1>
        </div>

        <div className='row' style={{'marginTop': '1em'}, {'marginBottom': '1em'}}>
          <div className='col center-text'>
          <AddEntry addNewEntry={addNewEntry}/>
          </div>

          <div className='col' style={{'marginTop': '2em'}}>
          <DisplayEntries entries={entries} deleteEntry={deleteEntry} addReply={addReply} deleteReply={deleteReply}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
