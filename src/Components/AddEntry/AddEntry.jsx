import React, { useState } from 'react';

const AddEntry = (props) => {

    const [user, setUser] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            user: user,
            post: post
        };

        props.addNewEntry(newEntry)

    }
    return (
        <form onSubmit={handleSubmit}>
            <label> User </label>
            <input type='text' value={user} onChange={(event) => setUser(event.target.value)}/>

            <label> Post </label>
            <input type='text' value={post} onChange={(event) => setPost(event.target.value)}/> 

            <button type='submit'>Post</button>
        </form>
    );
}
 
export default AddEntry;