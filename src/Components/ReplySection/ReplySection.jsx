import DeleteReply from "../DeleteReply/DeleteReply";

const ReplySection = (props) => {
    return ( 
        <span>
            <p>Comments</p>
            {props.replies.map((reply) => {
                return (
                    <div className='row border-box-comments' style={{'marginBottom': '1em'}}>
                        <div className="col-10">
                            <span className='comment-name'>{reply.name}</span>
                            <br></br>
                            <span className='comment-text'>{reply.reply}</span>
                        </div>

                        <div className="col-2" style={{'marginTop': '0.5em'}}>
                            <span><DeleteReply deleteReply= {props.deleteReply} entry={props.entry} reply={reply} replies={props.replies}/> </span>
                        </div>
                    </div>
                )
        
            })}
        </span>
    );
}
 
export default ReplySection;