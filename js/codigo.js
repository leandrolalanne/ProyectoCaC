console.log("se carga el codigo");
window.addEventListener("DOMContentLoaded", (event)=>{
    console.log("DOM completamente cargado y procesado");
    const menuBtn= document.getElementById("header div.collapse navbar-collapse nav justify-content-end");
    const nav= document.querySelector("header nav");
    const body=document.querySelector("body");

    menuBtn.addEventListener("click", (event) =>{
        menuBtn.classList.toggle("abrir");
        menuBtn.classList.toggle("cerrar");
        nav.classList.toggle("visible");
        body.classList.toggle("no-scroll");


    });
});