const base_url = 'https://bdayfinder-nodejs.herokuapp.com'
const btnSignup = document.querySelector(".signup__btn").addEventListener("click", function(){
    let username = document.querySelector('#email').value
    let firstname = document.querySelector('#firstname').value
    let lastname = document.querySelector('#lastname').value
    let birthday = document.querySelector('#birthday').value
    let password = document.querySelector('#password').value

    fetch(base_url + '/users/signup', {
        method: "post",
        headers : {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            "username" : username,
            "firstname" : firstname,
            "lastname" : lastname,
            "birthday" : birthday,
            "password" : password,
        })
    }).then(response => {
        return response.json()
    }).then(json => {
        if(json.status === "success"){
            let feedback = document.querySelector(".alert")
            feedback.textContent = "Signup complete!"
            feedback.classList.remove('hidden')

            let token = json.data.token
            localStorage.setItem("token", token)
            window.location.href = "index.html"
        }
    })
})