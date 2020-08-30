const btnSignup = document.querySelector(".signup__btn").addEventListener("click", function(){
    let email = document.querySelector('#email').value
    let firstname = document.querySelector('#firstname').value
    let lastname = document.querySelector('#lastname').value
    let birthday = document.querySelector('#birthday').value
    let password = document.querySelector('#password').value

    fetch('http://localhost:3000/users/signup', {
        method: "post",
        headers : {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            "email" : email,
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
            window.location.href = "app.html"
        }
    })
})