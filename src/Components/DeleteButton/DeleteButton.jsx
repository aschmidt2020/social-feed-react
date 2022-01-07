const DeleteButton = (props) => {
    
    function handleClick(event){
        event.preventDefault();
        let confirmDelete = window.confirm('Are you sure you would like to delete this post? Select OK for yes or cancel to cancel.')
        if(confirmDelete){
            props.deleteEntry(props.entry); 
        }
    }
    
    return ( 
        <span><button id={props.id} className='btn bg-transparent' onClick={handleClick}><i className="bi bi-trash" style={{'position': 'right'}}></i></button>
        </span>
     );
}
 
export default DeleteButton;