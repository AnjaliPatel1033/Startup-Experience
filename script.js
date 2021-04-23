var firstname;
var lastname;
var email;
var phone;
var isValid;

AOS.init();
const btn=document.querySelector('.navbar-toggler');
btn.addEventListener('click',()=>{
    btn.classList.toggle('toggle')
})

function formSubmit() {
    if(validateForm()){
        document.getElementById('error').innerHTML="Sucessfully Register";
        document.getElementById('error').classList.add('dialogSucess')
        resetForm();
    }
}
function  validateForm() {
    firstname=document.querySelector('#fname');
    lastname=document.querySelector('#lname');
    email=document.querySelector('#email').value;
    phone=document.querySelector('#phone').value;
    error=document.getElementById('error');
    if(firstname.value==""){
        document.getElementById('error').innerHTML="fill  the name";
        error.classList.add('dialogBox')
        return false;
    }
    if((firstname.value.length)<4 || (firstname.value.length)>200){
        document.getElementById('error').innerHTML="name must be (4-20) length";
        return false;
    }
    if(!isNaN(firstname.value) && /[^a-zA-Z\-\/]/.test(firstname.value)){
        document.getElementById('error').innerHTML="invalid Name";
        return false;
    } 
    if(lastname.value==""){
        document.getElementById('error').innerHTML="fill Education details";
        return false;
    } 
    if(!isNaN(lastname.value) && /[^a-zA-Z\-\/]/.test(lastname.value)){
        document.getElementById('error').innerHTML="invalid education data";
        return false;
    } 
    if(email==""){
        document.getElementById('error').innerHTML="fill Email Id";
        return false;
    } 
    if(email.indexOf('@') <= 0){
        document.getElementById('error').innerHTML="Invalid Email Id";
        return false;
    } 
    if(email.charAt(email.length - 4) != '.'){
        document.getElementById('error').innerHTML="invalid Email Id";
        return false;
    } 
    if(phone==""){
        document.getElementById('error').innerHTML="fill phone";
        return false;
    }
    if((isNaN(phone))){
        document.getElementById('error').innerHTML="invalid number";
        return false;
    }
    if((phone.length < 10)){
        document.getElementById('error').innerHTML="invalid number";
        return false;
    }
    return true;
}
function  resetForm() {
    document.querySelector('#fname').value="";
    document.querySelector('#lname').value="";
    document.querySelector('#email').value="";
    document.querySelector('#phone').value="";
}