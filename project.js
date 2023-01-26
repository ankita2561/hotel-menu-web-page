"use strict";
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  //The classList property returns the CSS classnames of an element.
  //The activeElement property returns the HTML element that have focus
});
document.querySelectorAll("li").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
//  var incrementButton=document.querySelector('.inc-button');
//  var decrementButton=document.querySelector('.dec-button');
//  for(var i=0;i<incrementButton.length;i++){
//   var button=incrementButton[i];
//   button.addEventListener('click',function(event){
//     var buttonClicked=event.target;
//     var input=buttonClicked.parentElement.children[1];
//     var inputvalue=input.value;
//     var newValue=parseInt(inputvalue)+1;
//     console.log(newValue);
//     input.value=newValue;
//     })
//  }
// let a = 0;
// let  num = document.getElementsByClassName("num");
// let  box = document.getElementsByClassName("wrapper");
// let  incrementButton = document.getElementsByClassName("inc-button");
// let  decrementButton = document.getElementsByClassName("dec-button");
// for (let i = 0; i < box.length; i++) {
//   console.log(box[i]);
//   // let button = incrementButton;
//   incrementButton.addEventListener("click", function () {
//     a++;
//     num.textContent = a;
//   });
// }
// let data=0;
// num.innerHTML=data;
// incrementButton.onclick=function(){
//   data++;
//   num.innerHTML=data;
// }
// let section=document.querySelector(".fourth-page");
// let start=false;
// let stat=document.querySelectorAll(".stats");
// window.onscroll=function(){
//   if(window.scrollY>=section.offsetTop){
//     if(!start){
//       stat.forEach((sta=>startCount(sta)));
//   }
//   start=true;
// }
// }
// function startCount(el){
//   let max=el.dataset.max;
//   let count=setInterval(()=>{
//     if( el.textContent==max){
//       clearInterval(count);
//     }
//   },2000/stat);
// }
// document.getElementsByClassName("dec-button").addEventListener("click", () => {
//   var val = parseInt(document.getElementsByClassName("num").innerHTML);
//   val = isNaN(val) ? 0 : val;
//   if (val > 0) val--;
//   document.getElementsByClassName("num").innerHTML = val;
// });

// const increment = (val) => {
//   if (val >= 0) v++;
//   document.querySelector(".num").innerHTML = val;
// };

// const decrement = (val) => {
//   if (val > 0) v--;
//   document.querySelector(".num").innerHTML = val;
// };
// document.querySelector(".dec-button").addEventListener("click", () => {
//   let val = parseInt(document.querySelector(".num").innerHTML);
//   val = isNaN(val) ? 0 : val;
//   if (val > 0) val--;
//   document.querySelector(".num").innerHTML = val;
// });
// document.querySelector(".inc-button").addEventListener("click", () => {
//   // var val = parseInt(document.getElementsByClassName("num").innerHTML);
//   // val = isNaN(val) ? 0 : val;
//   if (val >= 0) val++;
//   document.querySelector(".num").innerHTML = val;
// });
let val = parseInt(document.querySelector(".num").innerHTML);
val = isNaN(val) ? 0 : val;
const changenum = ()=>{
  document.querySelector(".num").innerHTML = val;
}
// val = isNaN(val) ? 0 : val;
const increment = () => {
  if (val >= 0) val++;
 changenum();
};

const decrement = () => {
  if (val > 0) val--;
  // document.querySelector(".num").innerHTML = val;
  changenum();
};
// var TrandingSlider = new Swiper('.tranding-slider', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2.5,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });
