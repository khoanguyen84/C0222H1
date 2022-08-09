// function PostItem(props) {
// function PostItem({ heading, content }) {
function PostItem(props) {
    // const { heading, content } = props;
    console.log(props)
    return (
        <div className="post-item">
            {/* <h3 className="heading_3" title="title" style={{ backgroundColor: "yellow", color: "red" }}>{props.heading}</h3>
            <p className="para">{props.content}</p> */}
            {/* <h3 className="heading_3" title="title" style={{ backgroundColor: "yellow", color: "red" }}>{heading}</h3>
            <p className="para">{content}</p> */}
        </div>
    )
}

export default PostItem;