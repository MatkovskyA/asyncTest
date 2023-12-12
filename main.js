const btnInput = document.querySelector('.btn')
const inputNode = document.querySelector('.input-text')
const wrapperListNode = document.querySelector('.wrapper')

async function getDataPosts() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json()
    return data
}

let list = await getDataPosts();

function createList(data) {
    let ul = document.createElement('ul')
    for(const item of data) {
        let liList = document.createElement('li');
        let aList = document.createElement('a')
        aList.textContent = item.title;
        aList.href = 'post.html?post_id=' + item.id;
        liList.append(aList);
        ul.append(liList);
        wrapperListNode.append(ul)

        liList.classList.add('reset-style-li');
        aList.classList.add('reset-style-a');
    }
    ul.classList.add('reset-style-ul');
}



createList(list)