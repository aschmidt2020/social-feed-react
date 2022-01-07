import DeleteButton from '../DeleteButton/DeleteButton';
import ReplySection from '../ReplySection/ReplySection';
import LikeDislikeButton from '../LikeDislikeButton/LikeDislikeButton';

const DisplayEntries = (props) => {    

    return ( //using key = timestamp in milliseconds so each list item should have a unique key
        <ol>
            {props.entries.map((entry, index) => {
                return (
                        <li key={entry.timeStamp}>
                        <div className='row border-box' style={{'marginTop' : '1em'}}>
                            <p>{entry.user}</p>
                            <p className='post-text'>{entry.post}</p>
                            <figcaption className="blockquote-footer center-text"> <cite title="Source Title">{entry.date} </cite> </figcaption>
                            <span><br></br></span>

                            <span className='center-text'>
                                <LikeDislikeButton />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <DeleteButton deleteEntry={props.deleteEntry} entry={entry} />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <ReplySection entry={entry} addReply={props.addReply}/>
                                <span><br></br></span>
                            </span>
                            

                            <span>
                                {entry.replySection.map((reply) => {
                                return(
                                        <div className='border-box-comments' style={{'marginBottom': '1em'}}>
                                            <span className='comment-name'>{reply.name}</span>
                                            <br></br>
                                            <span className='comment-text'>{reply.reply}</span>
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