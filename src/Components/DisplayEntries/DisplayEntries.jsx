import LikeButton from '../LikeButton/LikeButton';
import DislikeButton from '../DislikeButton/DislikeButton'

const DisplayEntries = (props) => {    

    return (
        props.entries.map((entry) => {
            return (
                <span>
                    <div className='row border-box' style={{'marginTop' : '1em'}}>
                        <p>{entry.user}</p>
                        <p className='post-text'>{entry.post}</p>
                        <figcaption className="blockquote-footer center-text"> <cite title="Source Title">{entry.date} </cite> </figcaption>
                            <span className='center-text'>
                                <LikeButton />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <DislikeButton />
                            </span>
                    </div>
                </span>
            )
            
        })
     );
    }
 
export default DisplayEntries; 