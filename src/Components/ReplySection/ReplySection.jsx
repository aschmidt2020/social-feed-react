const ReplySection = (props) => {
    return ( 
        <span>
            <p>Comments</p>
            {props.replies.map((reply) => {
                return (
                    <div className='border-box-comments' style={{'marginBottom': '1em'}}>
                        <span className='comment-name'>{reply.name}</span>
                        <br></br>
                        <span className='comment-text'>{reply.reply}</span>
                    </div>
                )
        
            })}
        </span>
    );
}
 
export default ReplySection;