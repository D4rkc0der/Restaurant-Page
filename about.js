
// menu toggle

let btnstatus= true;
let btnclick = document.querySelector('.btn-menu');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');

let navbarhide = document.querySelector('.nav-bar-hide');
let ulhide = document.querySelector('.nav-bar-hide ul');

let links = document.querySelectorAll('.nav-bar-hide ul li');
for(let i = 0; i<links.length; i++){
  links[i].addEventListener('click',onevent);
};

console.log(links);


btnclick.addEventListener('click',onClick);


function onClick(e){

  if(btnstatus===true){
    box1.style.transform='rotate(45deg)';
    box3.style.transform='rotate(-45deg)';
    box2.style.opacity='0';
    navbarhide.style.transform='translateX(0)';
    
    btnstatus = false;
    console.log(btnstatus);
  } else if(btnstatus===false){
  
    box1.style.transform='translateY(-10px)';
    box3.style.transform='translateY(+10px)';
    box2.style.opacity='1';
    navbarhide.style.transform='translateX(100%)';

    btnstatus = true;
    console.log(btnstatus);
  }


};

function onevent(e){
  if(btnstatus===false){
    navbarhide.style.transform='translateX(100%)';
  console.log('link click');
  btnstatus = true;
  box1.style.transform='translateY(-10px)';
  box3.style.transform='translateY(+10px)';
  box2.style.opacity='1';
}
  
};


// animation about page
let scroll = window.addEventListener('scroll',function(e){
  
  let animation = document.querySelector('.story');
  
  let position= animation.getBoundingClientRect().top;
 
  let animation1 =document.querySelector('.img1');
  let animation2 =document.querySelector('.img2');
  let animation3 =document.querySelector('.img3');
  let animation4 =document.querySelector('.img4');
  let animation5 =document.querySelector('.img5');
  let animation6 =document.querySelector('.img6');
  let position1= animation1.getBoundingClientRect().top;
  let position2= animation2.getBoundingClientRect().top;
  let position3= animation3.getBoundingClientRect().top;
  let position4= animation4.getBoundingClientRect().top;
  let position5= animation5.getBoundingClientRect().top;
  let position6= animation6.getBoundingClientRect().top;




  if(position <= window.innerHeight/1.1){
    animation.classList.add('after');
  } else if(position > window.innerHeight/1.1){
    animation.classList.remove('after');
  } 

  if(position1 <= window.innerHeight/1.3){
    animation1.classList.add('after');
  } else if(position1 > window.innerHeight/1.3){
    animation1.classList.remove('after');
  } 

  if(position2 <= window.innerHeight/1.3){
    animation2.classList.add('after');
  } else if(position2 > window.innerHeight/1.3){
    animation2.classList.remove('after');
  } 
  if(position3 <= window.innerHeight/1.3){
    animation3.classList.add('after');
  } else if(position3 > window.innerHeight/1.3){
    animation3.classList.remove('after');
  } 

  if(position4 <= window.innerHeight/1.3){
    animation4.classList.add('after');
   
  } else if(position4 > window.innerHeight/1.3){
    animation4.classList.remove('after');
  } 
  if(position5 <= window.innerHeight/1.3){
    animation5.classList.add('after');
   
  } else if(position5 > window.innerHeight/1.3){
    animation5.classList.remove('after');
  } 
  if(position6 <= window.innerHeight/1.3){
    animation6.classList.add('after');
   
  } else if(position6 > window.innerHeight/1.3){
    animation6.classList.remove('after');
  } 








  
  e.preventDefault();

});

