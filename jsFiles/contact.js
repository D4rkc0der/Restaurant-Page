
document.querySelector('#name').addEventListener('blur',matchName);
document.querySelector('#email').addEventListener('blur',matchEmail);
document.querySelector('#phone').addEventListener('blur',matchPhone);

 function matchName(){

  const name = document.querySelector('#name');

  const re=/^[a-zA-Z]{2,12}$/;

  if(!re.test(name.value)){
    document.querySelector('.valid-name').style.display='block';

  }else{
    document.querySelector('.valid-name').style.display='none';
  }



}

function matchEmail(){

  const validEmail=document.querySelector('.valid-email');
  const email = document.querySelector('#email');

  const re=/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;

  if(!re.test(email.value)){
    validEmail.style.display='block';

  }else{
    validEmail.style.display='none';
  }

}
function matchPhone(){

  const validphone=document.querySelector('.valid-phone');
  const phone = document.querySelector('#phone');

  const re=/^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)){
    validphone.style.display='block';

  }else{
    validphone.style.display='none';
  }

}