import DeleteButton from '../DeleteButton/DeleteButton';
import ReplySection from '../ReplySection/ReplySection';
import LikeDislikeButton from '../LikeDislikeButton/LikeDislikeButton';

const DisplayEntries = (props) => {    

    return ( //using key = timestamp in milliseconds so each list item should have a unique key
        <ol>
            {props.entries.map((entry) => {
                return (
                        <li key={entry.timeStamp}>
                        <div className='row border-box' style={{'marginTop' : '1em'}}>
                            <span className="right-align-text"><DeleteButton deleteEntry={props.deleteEntry} entry={entry}/></span>
                            <p>{entry.user}</p>
                            <p className='post-text'>{entry.post}</p>
                            <figcaption className="blockquote-footer left-align-text"> <cite title="Source Title">{entry.date}</cite>  
                            </figcaption>
                            <span><br></br></span>

                            <span className='center-text'>
                                <LikeDislikeButton />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <ReplySection entry={entry} addReply={props.addReply}/>
                            </span>
                            

                            
                            <span style={{'marginTop':'1em'}}>
                                <p>Comments</p>
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