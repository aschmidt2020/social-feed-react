import React, { useEffect, useState } from 'react';

const AddEntry = (props) => {

    let today = new Date();
    let todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ':' + String(today.getMinutes()).padStart(2, "0");
    let todayTimeStamp = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' +
                     today.getHours() + ':' + String(today.getMinutes()).padStart(2, "0") + ':' + String(today.getSeconds()).padStart(2, "0") + ':' + 
                     String(today.getMilliseconds()).padStart(2, "0");

    const [timeStamp, setTimeStamp] = useState('')
    const [user, setUser] = useState('');
    const [post, setPost] = useState('');
    const [date, setDate] = useState('')

    useEffect(() => { //will update date/time when time changed
        setDate(todayDate);
        setTimeStamp(todayTimeStamp)
    })

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            timeStamp: timeStamp,
            user: user,
            post: post,
            date: date,
            replySection: []
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
            <div className='row addEntry'>
                <div className='col-10 p-5 mb-4 rounded' style={{'marginTop': '3em'}}>
                    <p>Add A Post Here</p>
                    <form id='newPost' onSubmit={handleSubmit}>
                        <div className="form-floating" style={{'marginBottom': '1em'}}>
                            <input id='userForm' className='form-control' type='text' value={user} onChange={(event) => setUser(event.target.value)}/>
                            <label >NAME</label>
                        </div>
                        <div className="form-floating">
                            <input id='postForm' className='form-control' style={{'height': '100px'}} type='text' value={post} onChange={(event) => setPost(event.target.value)}/> 
                            <label>POST</label>
                        </div>
                        <button type='submit' className='btn btn-primary' style={{'marginTop': '1em'}}>Post</button>
                    </form>
                </div>
                <div className='col-10 p-5 mb-4 rounded' style={{'marginTop': '1em'}}>
                    <p className='post-text'>Motivational Quote:</p>
                    <p className='post-text'>“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”</p>
                    <br></br>
                    <figcaption className="blockquote-footer center-text">Toy T. Bennett<cite title="Source Title"> The Light in the Heart </cite> </figcaption>
                </div>
                </div>
        </span>
        );

            
}
 
export default AddEntry;