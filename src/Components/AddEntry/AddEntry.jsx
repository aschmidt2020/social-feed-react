import React, { useEffect, useState } from 'react';

const AddEntry = (props) => {

    let today = new Date();
    let todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ':' + String(today.getMinutes()).padStart(2, "0");
    console.log(todayDate)

    const [user, setUser] = useState('');
    const [post, setPost] = useState('');
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [date, setDate] = useState(todayDate)

    useEffect(() => { //will update date/time when time changed
        setDate(todayDate)
    },[todayDate])

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
        <span>
            <div className='row sticky-top'>
                <div className='col-10 p-5 mb-4 bg-light rounded-3' style={{'margin-top': '3em'}}>
                    <p>Add A Post Here</p>
                    <form id='newPost' onSubmit={handleSubmit}>
                        <div className="form-floating" style={{'margin-bottom': '1em'}}>
                            <input id='userForm' className='form-control' type='text' value={user} onChange={(event) => setUser(event.target.value)}/>
                            <label for="userForm">USER</label>
                        </div>
                        <div className="form-floating">
                            <input id='postForm' className='form-control' style={{'height': '100px'}} type='text' value={post} onChange={(event) => setPost(event.target.value)}/> 
                            <label for="postForm">POST</label>
                        </div>
                        <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Post</button>
                    </form>
                </div>
                <div className='col-10 p-5 mb-4 bg-light rounded-3' style={{'margin-top': '1em'}}>
                    <p1>Motivational Quote:</p1>
                    <p className='post-text'>“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”</p>
                    <br></br>
                    <figcaption className="blockquote-footer center-text">Toy T. Bennett<cite title="Source Title"> The Light in the Heart </cite> </figcaption>
                </div>
                </div>
        </span>
        );

            
}
 
export default AddEntry;