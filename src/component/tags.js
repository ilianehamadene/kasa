

function Tags (props) {


    return (
        <div className="tags">
            {(props).tags.map((item)=>(
                <div className="tags-box">
                    <p>{item}</p>
                </div>
           ))}
            </div>
    )
}
export default Tags











