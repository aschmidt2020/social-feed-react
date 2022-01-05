import React, { useState } from 'react';

const AddEntry = (props) => {

    const [user, setUser] = useState('');
    const [post, setPost] = useState('');
    const [liked, setLiked] = useState(false);

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            user: user,
            post: post,
            liked: liked
        };

        props.addNewEntry(newPost)

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