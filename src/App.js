import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{user: 'Welcome to SocialFeed', post: 'Please start creating posts.'}])

  
  return (
    <div>
     < DisplayEntries entries={entries}/>
    </div>
  );
}

export default App;
