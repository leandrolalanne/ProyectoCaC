console.log("se carga el codigo");
window.addEventListener("DOMContentLoaded", (event)=>{
    console.log("DOM completamente cargado y procesado");
    const menuBtn= document.getElementById("header button.navbar-toggler");
    const nav= document.querySelector("header.header sticky-top");
    const body=document.querySelector("body");

    menuBtn.addEventListener("click", (event) =>{
        menuBtn.classList.toggle("abrir");
        menuBtn.classList.toggle("cerrar");
        nav.classList.toggle("visible");
        body.classList.toggle("no-scroll");


    });
});