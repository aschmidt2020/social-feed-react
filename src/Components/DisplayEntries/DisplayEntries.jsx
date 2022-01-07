import LikeButton from '../LikeButton/LikeButton';
import DislikeButton from '../DislikeButton/DislikeButton';
import DeleteButton from '../DeleteButton/DeleteButton';

const DisplayEntries = (props) => {    
    return ( //using key = timestamp in milliseconds so each list item should have a unique key
        <ol>
            {props.entries.map((entry,index) => {
                return (
                        <li key={entry.timeStamp}>
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