import React, { useState } from 'react';

const AddReply = (props) => {
    const [formExpanded, setFormExpanded] = useState(false);
    const [name, setName] = useState(' ')
    const [reply, setReply] = useState([])

    function handleClick(event){
        event.preventDefault();
        let oppositeState = !formExpanded;
        setFormExpanded(oppositeState);
        debugger
    }

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

    if(formExpanded){
        return (
            <span className='center-text'>
            <button id={props.timeStamp} className='btn bg-transparent' onClick={handleClick}>
            <i className="bi bi-chat-square-dots"></i>
            </button>

            <form id='newReply' onSubmit={handleSubmit} style={{'marginTop':'1em'}}>
            <div className='row'>

            <div className='col-4'>
                <div className="form-floating">
                    <input id='nameForm' className='form-control'  type='text' value={name} onChange={(event) => setName(event.target.value)}/>
                    <label >NAME</label>
                </div>
            </div>

            <div className='col-6'>
                <div className="form-floating">
                    <input id='replyForm' className='form-control'  type='text' value={reply} onChange={(event) => setReply(event.target.value)}/> 
                    <label>REPLY</label>
                </div>
            </div>

            <div className='col-2'>
                <button type='submit' className='btn btn-secondary' style={{'marginTop': '0.5em'}}>REPLY</button>
            </div>
            
            </div>
        </form>
        </span>
        )
    }

    //will return just button if button is not expanded
    return ( 
        <span className='center-text'>
            <button id={props.timeStamp} className='btn bg-transparent' onClick={handleClick}>
            <i className="bi bi-chat-square-dots"></i>
            </button>
        </span>
    );

    }
 
export default AddReply;