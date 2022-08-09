// JSX = JavaScript XML
// function component
function PostItem(props) {
    console.log(props)
    return (
        <div className="post-item">
            <h3 className="heading_3" title="title" style={{ backgroundColor: "yellow", color: "red" }}>{props.heading}</h3>
            <p className="para">{props.content}</p>
        </div>
    )
}

// class component
// class PostItem extends React.Component {
//     render() {
//         return (
//             <div className="post-item">
//                 <h3 className="heading_3" title="title" style={{ backgroundColor: "yellow", color: "red" }}>{heading}</h3>
//                 <p className="para">quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
//             </div>
//         )
//     }
// }


const heading = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
const divJSX = (
    // <PostItem></PostItem>
    <React.Fragment>
        <PostItem 
            heading='sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
            content = 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        />

        <PostItem 
            heading = "Heading 1"
            content = "content 1"
        />
    </React.Fragment>
)
ReactDOM.render(divJSX, document.querySelector("#root"));