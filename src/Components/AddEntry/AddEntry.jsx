import React, { useState } from 'react';

const AddEntry = (props) => {

    const [user, setUser] = useState('');
    const [post, setPost] = useState('');
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            user: user,
            post: post,
            liked: liked,
            disliked: disliked
        };

        props.addNewEntry(newPost);

        setUser(''); //sets user and post to blank to reset form after submission
        setPost('');

    }

    return (
        <form id='newPost' onSubmit={handleSubmit}>
            <label> User </label>
            <input id='userForm' type='text' value={user} onChange={(event) => setUser(event.target.value)}/>

            <label> Post </label>
            <input id='postForm' type='text' value={post} onChange={(event) => setPost(event.target.value)}/> 

            <button type='submit'>Post</button>
        </form>
    );
}
 
export default AddEntry;