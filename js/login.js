const base_url = 'https://bdayfinder-nodejs.herokuapp.com'
const btnLogin = document.querySelector('.login__btn').addEventListener('click', function(){
    let username = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    fetch(base_url + '/users/login', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        }, 
        body: JSON.stringify({
            "username" : username,
            "password" : password
        })
    }).then(response => {
        return response.json()
    }).then(json => {
        if(json.status === "success"){
            let token = json.data.token
            let name = json.data.name
            localStorage.setItem("token", token)
            localStorage.setItem("name", name)
            window.location.href = "index.html"
        }else{
            let feedback = document.querySelector(".alert")
            feedback.textContent = "Login failed"
            feedback.classList.remove('hidden')
        }
    })
})