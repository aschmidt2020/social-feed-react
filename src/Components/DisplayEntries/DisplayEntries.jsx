import LikeButton from '../LikeButton/LikeButton';
import DislikeButton from '../DislikeButton/DislikeButton'

const DisplayEntries = (props) => {    
    // will display list in reverse order so newest posts appear on top
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
                                </span>
                        </div>
                        </li>
                    
                )
                
            })}
        </ol>
     );
    }
 
export default DisplayEntries; 