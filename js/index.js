const base_url = 'https://bdayfinder-nodejs.herokuapp.com'
/* redirect als je niet bent ingelogd*/
if(!localStorage.getItem("token")){
    window.location.href = "login.html"
}
fetch(base_url + "/api/v1/chats", {
    'headers' : {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    } 
}).then(result => {
    return result.json()
}).then(json => {
    console.log(json)
}).catch( err => {
    console.log(err)
})

/* Add a chat message to the channel */
let input = document.querySelector(".message__input")
input.addEventListener("keyup", e => {
    if (e.keyCode === 13){
        // op de enter
        let text = input.value
        let sender = localStorage.getItem('name')
        fetch('http://localhost:3000/api/v1/chats', {
            method: "post",
            "headers": {
                'Content-type': 'application/json', 
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                "text" : text
            })
        }).then(result => {
            return result.json()
        }).then( json => {
            console.log(json)
            let chat = `<li class="chatlog__item chatlog__item--sent" data-id="${json.data.chat._id}">
             <h1 class="chatlog__name">${sender}</h1> 
             <p class="chatlog__text">${json.data.chat.text}</p>
             </li>`
             document.querySelector('.chatlog').insertAdjacentHTML('beforeend', chat)
        }).catch(err => {
            console.log(err)
        })
    }
})