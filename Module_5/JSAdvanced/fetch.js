import { API_URL } from './domain.js';

fetch(API_URL,{
    method: "GET"
}).then(function(response){
    return response.json();
}).then(function(posts){
    let htmls = posts.map(function(post){
            return `
                <div class="post-item">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <a href="javascript:;" onclick="getPost(${post.id})">Detail</a>
                </div>
            `
    })

    document.querySelector('.posts').innerHTML = htmls.join("");
})

// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method: "GET"
// }).then(async function(response){
//     let posts = await response.json();
//     let htmls = posts.map(function(post){
//         return `
//             <div class="post-item">
//                 <h3>${post.title}</h3>
//                 <p>${post.body}</p>
//             </div>
//         `
//     })

//     document.querySelector('.posts').innerHTML = htmls.join("");
// })


function getPost(postId){
    fetch(`${API_URL}/${postId}`,{
        method: "GET"
    }).then(async (response) => {
        let post = await response.json();
        document.querySelector('.post-detail').innerHTML = `
                <table border="1">
                    <tbody>
                        <tr>
                            <td>UserId</td>
                            <td>${post.userId}</td>
                        </tr>
                        <tr>
                            <td>PostId</td>
                            <td>${post.id}</td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>${post.title}</td>
                        </tr>
                        <tr>
                            <td>Body</td>
                            <td>${post.body}</td>
                        </tr>
                    </tbody>
                </table>
        `
    })
}