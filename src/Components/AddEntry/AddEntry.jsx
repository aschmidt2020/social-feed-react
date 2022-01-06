import React, { useState } from 'react';

const AddEntry = (props) => {

    let today = new Date();
    let todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(todayDate)

    const [user, setUser] = useState('');
    const [post, setPost] = useState('');
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [date, setDate] = useState(todayDate)

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            user: user,
            post: post,
            liked: liked,
            disliked: disliked,
            date: date,
        };

        props.addNewEntry(newPost);

        resetForm();
    }

    function resetForm(){
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