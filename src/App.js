import React, { useState } from 'react';
import AddEntry from './Components/AddEntry/AddEntry';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import './App.css'

function App() {

  const [entries, setEntries] = useState([{user: 'Welcome to SocialFeed', post: 'Please start creating posts.', date:'and make sure to have fun!'}])

  function addNewEntry(post){
    let tempEntries = [post, ...entries];
    setEntries(tempEntries);
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
          <DisplayEntries entries={entries} />
          </div>
        </div>



      </div>
    </div>
  );
}

export default App;
