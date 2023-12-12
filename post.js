const btnInput = document.querySelector('.btn')
const inputNode = document.querySelector('.input-text')
const wrapperListNode = document.querySelector('.wrapper')

async function getDataPosts(id) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = await res.json()
    return data
}

// console.log(window.location.search);
let urlData = new URLSearchParams(window.location.search);
let id = urlData.get('post_id')

let postData = await getDataPosts(id);

function showPost(post) {
    let titlePost = document.createElement('h2');
    let pPost = document.createElement('p');

    titlePost.textContent = post.title;
    pPost.textContent = post.body;
    document.title = post.title;

    document.body.append(titlePost, pPost)
}

showPost(postData)

