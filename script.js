// menu function
const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const nav = document.querySelector('#navbar');
// logic
if(bar){
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}


// product slider effect

var mainImage = document.getElementById("MainImage");
var smallimg = document.getElementsByClassName("small-img");

//logic

smallimg[0].onclick = function(){
    mainImage.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    mainImage.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    mainImage.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    mainImage.src = smallimg[3].src;
}
