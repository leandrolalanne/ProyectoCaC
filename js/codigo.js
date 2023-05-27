console.log("se carga el codigo");
window.addEventListener("DOMContentLoaded",(event)=>{
    console.log("DOM completamente cargado y procesado");

    const menuBtn=document.getElementById("myDIV");
    const reservado=document.getElementById("reservado");
    

    menuBtn.addEventListener("click", (event)=>{
        var x = document.getElementById("myDIV");
            if (x.innerHTML === "Enviar mensaje") {
                x.innerHTML = "Mensaje enviado";
            } else {
                x.innerHTML = "Enviar mensaje";
            }
    })
    reservado.addEventListener("click", (event)=>{
        var x = document.getElementById("reservado");
            if (x.innerHTML === "RESERVAR") {
                x.innerHTML = "RESERVADO";
            } else {
                x.innerHTML = "RESERVAR";
            }
    })        

})