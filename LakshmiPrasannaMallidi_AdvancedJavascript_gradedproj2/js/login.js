(function(){
    /* Setting default username and pwd in local storage*/
    console.log("Loaded successfully")
    window.localStorage.setItem('assignmentUsername', 'xyz@jobportal.com');
    window.localStorage.setItem('assignmentPassword', 'Welcome@1234');

    /* attach event listener to login button*/
    let loginForm = document.querySelector('.loginForm');
    loginForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        console.log("Form submitting");

        let username = document.querySelector('.username').value.trim();
        let password = document.querySelector('.password').value.trim();
        let errorMessage = document.querySelector('.error-message');

        if(username != window.localStorage.getItem('assignmentUsername') && password != window.localStorage.getItem('assignmentPassword')){
            errorMessage.innerHTML = "Wrong Username or Password";
            return;
        }
        window.location.href = "./resumePage.html"
    });
})();