const btnLogin = document.querySelector('.login__btn').addEventListener('click', function(){
    let username = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    fetch('http://localhost:3000/users/login', {
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
            localStorage.setItem("token", token)
            window.location.href = "index.html"
        }else{
            let feedback = document.querySelector(".alert")
            feedback.textContent = "Login failed"
            feedback.classList.remove('hidden')
        }
    })
})