document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name= document.getElementById("name").ariaValueMax.trim();
    let email= document. getElementById("email").ariaValueMax.trim();
    let password= document. getElementById("password").ariaValueMax.trim();
    let confirmPassword= document. getElementById("confirmPassword").ariaValueMax.trim();
    let error= document. getElementById("errorMessage").ariaValueMax.trim();
    let success= document. getElementById("successMessage").ariaValueMax.trim();

    error.textContent="";
    success.textContent="";

    if(!name|| !email || !password || !confirmPassword){
        error.textContent= "Please fill in all fields.";
        return;
    }
    if(!email.includes("@")|| !email.includes(".")){
        error.textContent= "Enter a valid email address.";
        return;
    }
    if (password !== confirmPassword){
        error.textContent= "Passwords do not match.";
        return
    }
    success.textContent='Welcome to LearnLink, ${name}!' ;

        document.getElementById('loginForm').addEventListener('submit',(e)=>{
            e.preventDefault();
            
        }


});