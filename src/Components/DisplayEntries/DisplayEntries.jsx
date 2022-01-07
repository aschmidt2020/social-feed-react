import LikeButton from '../LikeButton/LikeButton';
import DislikeButton from '../DislikeButton/DislikeButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import ReplySection from '../ReplySection/ReplySection';

const DisplayEntries = (props) => {    

    return ( //using key = timestamp in milliseconds so each list item should have a unique key
        <ol>
            {props.entries.map((entry) => {
                return (
                        <li key={entry.timeStamp}>
                        <div className='row border-box' style={{'marginTop' : '1em'}}>
                            <p>{entry.user}</p>
                            <p className='post-text'>{entry.post}</p>
                            <figcaption className="blockquote-footer center-text"> <cite title="Source Title">{entry.date} </cite> </figcaption>
                            <span className='center-text'>
                                <LikeButton />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <DislikeButton />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <DeleteButton deleteEntry={props.deleteEntry} entry={entry} />
                            </span>
                            <ReplySection entry={entry} addReply={props.addReply}/>
                    
                            <span>
                                {entry.replySection.map((reply) => {
                                   return(
                                        <div>
                                            <p>{reply.name}</p>
                                            <p>{reply.reply}</p>
                                        </div>
                                   )
                                })}
                            </span>
                        </div>
                        </li>

                )
                
            })}
        </ol>
     );
    }
 
export default DisplayEntries; 
    
