
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
    navbarhide.style.transform='translateX(0%)';
    
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
 

  if(position <= window.innerHeight/1.3){
    animation.style.opacity='1';
    animation.style.transform='translateX(0)'
  } else if(position > window.innerHeight/3){
    animation.style.opacity='0';
    animation.style.transform='translateX(150px)'
  } 


  
  e.preventDefault();

});

