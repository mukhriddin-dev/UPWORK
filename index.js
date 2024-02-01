"use strict";

let loadWrapper = document.querySelector('.load_wrapper');



window.addEventListener('DOMContentLoaded',()=>{
    loadWrapper.style.display = 'flex';
    document.body.style.overflow="hidden";
})


window.addEventListener('load',()=>{

    setTimeout( ()=>{

        loadWrapper.style.display = 'none';
        document.body.style.overflow="visible";

    } , 2000)
  
})


let modalWrapper = document.querySelector(".modal_wrapper"),
open=document.querySelector("#login"),
close=document.querySelector("#close");


open.addEventListener("click",()=>{
    modalWrapper.style.display = "flex";
    document.body.style.overflow = "hidden";
})


close.addEventListener("click",()=>{
    modalWrapper.style.display = "none";
    document.body.style.overflow = "visible";
})

modalWrapper.addEventListener('click', (e)=>{


    if( e.target.classList.contains('modal_header') || e.target.classList.contains('modal_body') || e.target.classList.contains('modal_footer') || e.target.classList.contains('modal_title') || e.target.classList.contains("modal_submit")){
        modalWrapper.style.display = "flex";
        console.log(e.target.classList);
        document.body.style.overflow = "hidden";
    }else{
        modalWrapper.style.display = "none";
        console.log(e.target.classList)
        document.body.style.overflow = "visible";
    }

})
