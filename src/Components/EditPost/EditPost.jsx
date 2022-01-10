import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const EditPost = (props) => {
    const [user, setUser] = useState(props.entry.user);
    const [post, setPost] = useState(props.entry.post);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSubmit(event){
        
        event.preventDefault();
        //debugger
        let updatedPost = {
            timeStamp: props.entry.timeStamp,
            user: user,
            post: post,
            date: props.entry.date,
            replySection: props.entry.replySection,
        }

        props.editEntry(updatedPost);
        setShow(false);
        //do not need form reset so popup will always contain information from the post
    }

    return ( 
        <>
        <Button variant='bg-transparent' onClick={handleShow}>
            <i className="bi bi-pencil"></i>
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              
          <form id='newReply' onSubmit={handleSubmit} style={{'marginTop':'1em'}}>
               <div className='row'>
                   <div className="form-floating" style={{'marginBottom': '1em'}}>
                       <input id='nameForm' className='form-control'  type='text' value={user} onChange={(event) => setUser(event.target.value)}/>
                       <label >NAME</label>
                   </div>
  
                   <div className="form-floating" style={{'marginBottom': '1em'}}>
                       <input id='replyForm' className='form-control'  type='text' value={post} onChange={(event) => setPost(event.target.value)}/> 
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
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
     );
}
 
export default EditPost;