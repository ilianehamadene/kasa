

function Tags ({props}) {


    return (
        <div className="tags">
                    {props.tags.map((item)=>(
                        <div className="tags-box" key={item}>
                            <p>{item}</p>
                        </div>
                ))}
                    </div>
    )
}
export default Tags











