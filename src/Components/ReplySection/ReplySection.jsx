import React, { useState, useEffect } from 'react';

const ReplySection = (props) => {
    const [name, setName] = useState(' ')
    const [reply, setReply] = useState([])

    function handleSubmit(event){
        
        event.preventDefault();
        //debugger
        let updatedPost = {
            timeStamp: props.entry.timeStamp,
            user: props.entry.user,
            post: props.entry.post,
            date: props.entry.date,
            replySection: [{
                name: name,
                reply: reply
            }, ...props.entry.replySection] //adds new reply onto old reply section
        }

        props.addReply(updatedPost);

        resetForm();
    }

    function resetForm(){
        setName(''); //sets user and post to blank to reset form after submission
        setReply('');
    }

    return ( 
        <form id='newReply' onSubmit={handleSubmit} style={{'marginTop': '2em'}}>
            <div className='row'>

            <div className='col-4'>
                <div className="form-floating" style={{'marginBottom': '1em'},{'marginLeft': '1em'}}>
                    <input id='nameForm' className='form-control' type='text' value={name} onChange={(event) => setName(event.target.value)}/>
                    <label >NAME</label>
                </div>
            </div>

            <div className='col-6'>
                <div className="form-floating">
                    <input id='replyForm' className='form-control' type='text' value={reply} onChange={(event) => setReply(event.target.value)}/> 
                    <label>REPLY</label>
                </div>
            </div>

            <div className='col-2'>
                <button type='submit' className='btn btn-secondary' style={{'marginTop': '0.5em'}}>REPLY</button>
            </div>
            </div>
            
        </form>
    );

    }
 
export default ReplySection;