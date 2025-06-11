console.log("hello world")

let correctEmail = "student@codetribe.co.za"
let correctPassword = "codetribe1234"

function checkLogin(){
    const inputEmail = document.getElementById("email").value;
    const inputPassword = document.getElementById("password").value;
    const resultsDiv = document.getElementById("loginResult");

if(inputEmail === correctEmail && inputPassword === correctPassword){
    resultsDiv.innerText = "Login successful"
}
else if(inputEmail ==! correctEmail && inputPassword ==!correctPassword){
    resultsDiv.innerText = "Incorrect email or Password"
}
else if(inputEmail ===''){
    resultsDiv.innerText ="Please fill out the email input"
}
else if(inputPassword === ''){
    resultsDiv.innerText = "please fill out the password input"
}
else{
    resultsDiv.innerText = "Invalid email and password"
}

}

//Counter
let count = document.getElementById("count").value || 0;

function increase(){
    // alert("Increase")
    count++;
    document.getElementById("count").innerText = count
}
function decrease(){
    // alert("decrease")
    count--;
    document.getElementById("count").innerText = count
}