import DeleteReply from "../DeleteReply/DeleteReply";
import EditReply from "../EditReply/EditReply";

const ReplySection = (props) => {
    return ( 
        <span>
            <p>Replies</p>
            {props.replies.map((reply) => {
                return (
                    <li key={reply.replyTimeStamp}>
                        <div className='row border-box-comments' style={{'marginBottom': '1em'}}>
                            <div className="col-9">
                                <span className='comment-name'>{reply.name}</span>
                                <br></br>
                                <span className='comment-text'>{reply.reply}</span>
                            </div>

                            <div className="col-3" style={{'marginTop': '0.5em'}}>
                                <span><EditReply editReply={props.editReply} entry={props.entry} reply={reply} replies={props.replies}/></span>
                                <span><DeleteReply deleteReply={props.deleteReply} entry={props.entry} reply={reply} replies={props.replies}/> </span>
                            </div>
                        </div>
                    </li>
                )
        
            })}
        </span>
    );
}
 
export default ReplySection;