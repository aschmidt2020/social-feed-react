const DeleteReply = (props) => {
    
    function handleClick(event){
        event.preventDefault();
        //debugger
        let updatedReplies = [...props.replies]

        let confirmDelete = window.confirm(`Are you sure you would like to delete this comment?\n\nName of user: '${props.reply.name}'\nPost content: '${props.reply.reply}'\n\nSelect OK for yes or Cancel to cancel.`)
        if(confirmDelete){
            let replyToBeDeletedIndex = props.replies.findIndex(e => {
                if(e.name == props.reply.name && e.reply == props.reply.reply){ //used timeStamp to identify since it should be unique for each post
                  return true;
                }
                else{
                  return false;
                }
              })

            updatedReplies.splice(replyToBeDeletedIndex, 1);
            
            //console.log(updatedReplies)

            let updatedPost = {
                timeStamp: props.entry.timeStamp,
                user: props.entry.user,
                post: props.entry.post,
                date: props.entry.date,
                replySection: [...updatedReplies] //adds new reply onto old reply section
            }

            props.deleteReply(updatedPost); 
        }
    }
    
    return ( 
        <span><button id={props.id} className='btn bg-transparent' onClick={handleClick}><i className="bi bi-trash"></i></button>
        </span>
     );
}
 
export default DeleteReply;