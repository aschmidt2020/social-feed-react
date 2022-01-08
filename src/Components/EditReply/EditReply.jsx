import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const EditReply = (props) => {
    const [name, setName] = useState(props.reply.name);
    const [reply, setReply] = useState(props.reply.reply);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSubmit(event){
        event.preventDefault();
        //debugger
        let updatedReplies = [...props.replies];

        let editedReply = {
            replyTimeStamp: props.reply.replyTimeStamp,
            name: name,
            reply: reply
        }

        let replyToBeDeleted = props.replies.findIndex(e => {
            if(e.replyTimeStamp == editedReply.replyTimeStamp){ //used timeStamp to identify since it should be unique for each post
              return true;
            }
            else{
              return false;
            }
          })

        updatedReplies.splice(replyToBeDeleted, 1); //deletes old entry
        updatedReplies.splice(replyToBeDeleted, 0, editedReply); //replaces with new entry
        
        let updatedPost = {
            timeStamp: props.entry.timeStamp,
            user: props.entry.user,
            post: props.entry.post,
            date: props.entry.date,
            replySection: [...updatedReplies] //adds new reply onto old reply section
        }

        props.editReply(updatedPost);
        setShow(false);
        debugger

    }

    return (
        <>
      <Button variant='bg-transparent' onClick={handleShow}>
        <i className="bi bi-pencil"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Reply</Modal.Title>
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
            Edit Reply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )

    }
 
export default EditReply;