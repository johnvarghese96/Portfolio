const form = document.querySelector('#my-form')
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const password = document.querySelector("#pwd");
const msg = document.querySelector('.msg');

console.log(nameInput)


form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault()
    let messages=[]
  

    if(nameInput.value === '' || emailInput.value === '' || password.value === '') {

        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';}
        


    //clear fields
    nameInput.value = '';
    emailInput.value = '';
    password.value='';


}

