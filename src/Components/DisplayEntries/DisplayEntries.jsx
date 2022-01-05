const DisplayEntries = (props) => {
    return (
        props.entries.map((entry) => {
            return (
                <span>
                    <h1>{entry.user}</h1>
                    <p>{entry.post}</p>
                </span>
            )
            
        })
     );
}
 
export default DisplayEntries; 