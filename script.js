const form=document.getElementById('form');
const password1El=document.getElementById('password1');
const password2El=document.getElementById('password2');
const messageContainer=document.querySelector('.message-container')
const message=document.getElementById('message')



let isValid=false;
let passwordsMatch=false;


validateForm=()=>{
    isValid=form.checkValidity();
    if(!isValid){
        message.textContent="Please fill out all fields";
        message.style.color='red';
        messageContainer.style.borderColor='red';
    }
    if(password1El.value===password2El.value){
        passwordsMatch=true;
        password2El.style.borderColor='green';
        password2El.style.borderColor='green';
    }
    else{
        passwordsMatch=false
        message.textContent='Make sure passwords match';
        message.style.color='red';
        messageContainer.style.borderColor='red';
        password1El.style.borderColor='red'; 
        password2El.style.borderColor='red'; 
    }
    if(isValid&&passwordsMatch){
        message.textContent='Successfully Registered!';
        message.style.color='green';
        messageContainer.style.borderColor='green';
    }
}

storeFormData=()=>{
    const user={
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        password:form.password1.value
    };
    console.log(user);
}

processFormData=(e)=>{
    e.preventDefault();
    console.log(e);
    validateForm();
    if(isValid&&passwordsMatch){
        storeFormData();
    }
}
form.addEventListener('submit',processFormData)