// const h1 = document.createElement("h1");
// h1.innerText = "Chào anh em";
// h1.id = "heading_1";
// h1.className ="heading";

// // document.querySelector('body').appendChild(h1);
// document.body.appendChild(h1);

{/* <div class="post-item">
<h3 class="heading_3" title="title">sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
<p class="para">quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
</div> */}

const div = document.createElement("div");
div.className = "post-item";

const h3 = document.createElement("h3");
h3.className="heading_3";
h3.title = "title";
h3.innerText = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";

const p = document.createElement("p");
p.className = "para";
p.innerText = "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto";

div.appendChild(h3);
div.appendChild(p);

document.querySelector("#root").appendChild(div);

{/* <ul class="menu">
    <li class="menu-item">Trang chủ</li>
    <li class="menu-item">Tin tức</li>
    <li class="menu-item">Thông báo</li>
</ul> */}