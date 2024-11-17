const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const tab = document.querySelector('.tab');
menuBtn.addEventListener('click',()=>{
    tab.style.left="0px";
})
closeBtn.addEventListener('click',()=>{
    tab.style.left="-300px";
})
