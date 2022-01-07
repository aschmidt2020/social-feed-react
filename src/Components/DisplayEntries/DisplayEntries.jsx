import LikeButton from '../LikeButton/LikeButton';
import DislikeButton from '../DislikeButton/DislikeButton'
import DeleteButton from '../DeleteButton/DeleteButton'


const DisplayEntries = (props) => {    
    // will display list in reverse order so newest posts appear on top

    // function handleDelete(event, entry) {
    //     event.preventDefault();
    //     debugger
    //     let confirmDelete = window.confirm('Are you sure you would like to delete this post? Select OK for yes or cancel to cancel.')
    //     if(confirmDelete){
    //         props.deleteEntry(entry); 
    //     }
    // }

    return (
        <ol reversed="reversed">
            {props.entries.map((entry,index) => {
                return (
                        <li>
                        <div className='row border-box' style={{'marginTop' : '1em'}}>
                            <p>{entry.user}</p>
                            <p className='post-text'>{entry.post}</p>
                            <figcaption className="blockquote-footer center-text"> <cite title="Source Title">{entry.date} </cite> </figcaption>
                                <span className='center-text'>
                                    <LikeButton id={index} />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <DislikeButton id={index} />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <DeleteButton id={index} deleteEntry={props.deleteEntry} entry={entry} />
                                </span>
                        </div>
                        </li>
                    
                )
                
            })}
        </ol>
     );
    }
 
export default DisplayEntries; 

//<DeleteButton id={index} deleteEntry={props.deleteEntry} entry={entry} />
//<button className='btn bg-transparent' onClick={() => {handleDelete({entry})}}><i className="bi bi-trash" style={{'position': 'right'}}></i></button>