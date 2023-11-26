let link = document.querySelector('.link');
let email = document.querySelector('.email');
let password = document.querySelector('.password');


console.log(email.value);

let handelchange = ()=>{
    console.log(email.value);
}
let emailValue = 'admin123@gmail.com';
let passwordValue = '12345';




if(email.value === emailValue && password.value === passwordValue){
    link.href = '.html';
}