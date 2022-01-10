import React, { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const AddReply = (props) => {

    let today = new Date();
    let todayTimeStamp = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' +
                     today.getHours() + ':' + String(today.getMinutes()).padStart(2, "0") + ':' + String(today.getSeconds()).padStart(2, "0") + ':' + 
                     String(today.getMilliseconds()).padStart(2, "0");

    const [name, setName] = useState(' ');
    const [reply, setReply] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSubmit(event){
        
        event.preventDefault();
        //debugger
        let newReply = {
          replyTimeStamp: todayTimeStamp,
          name: name,
          reply: reply
        }

        let updatedPost = {
            timeStamp: props.entry.timeStamp,
            user: props.entry.user,
            post: props.entry.post,
            date: props.entry.date,
            replySection: [newReply, ...props.entry.replySection] //adds new reply onto old reply section
        }

        props.addReply(updatedPost);
        setShow(false);
        resetForm();

    }

    function resetForm(){
        setName(''); //sets user and post to blank to reset form after submission
        setReply('');
    }

    return (
        <>
      <Button variant='bg-transparent' onClick={handleShow}>
            <i className="bi bi-chat-square-dots"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Reply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <form id='newReply' onSubmit={handleSubmit} style={{'marginTop':'1em'}}>
             <div className='row'>


                 <div className="form-floating" style={{'marginBottom': '1em'}}>
                     <input id='nameForm' className='form-control'  type='text' value={name} onChange={(event) => setName(event.target.value)}/>
                     <label >NAME</label>
                 </div>

                 <div className="form-floating" style={{'marginBottom': '1em'}}>
                     <input id='replyForm' className='form-control'  type='text' value={reply} onChange={(event) => setReply(event.target.value)}/> 
                     <label>REPLY</label>
                 </div>

             </div>
         </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Reply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )

    }
 
export default AddReply;