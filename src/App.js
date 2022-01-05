import React, { useState } from 'react';
import AddEntry from './Components/AddEntry/AddEntry';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{user: 'Welcome to SocialFeed', post: 'Please start creating posts.'}])

  function addNewEntry(entry){
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }
  
  return (
    <div>
      <AddEntry addNewEntry={addNewEntry}/>
     < DisplayEntries entries={entries}/>
    </div>
  );
}

export default App;
