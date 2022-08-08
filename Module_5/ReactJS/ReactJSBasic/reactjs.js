// const h1 = React.createElement("h1", {
//     id: "heading_1",
//     className:"heading",
//     style: {
//         color: "red",
//         backgroundColor: "green"
//     }
// }, "Chào anh em");

// ReactDOM.render(h1, document.querySelector("#root"));

{/* <div class="post-item">
<h3 class="heading_3" title="title">sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
<p class="para">quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
</div> */}

const divReact = React.createElement("div", { className:"post-item" },
    React.createElement("h3", {
        className:"heading_3",
        title: "title"
    }, "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"),
    React.createElement("p", {
        className:"para"
    }, "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
)

ReactDOM.render(divReact, document.querySelector("#root"));