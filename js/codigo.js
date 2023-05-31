console.log("se carga el codigo");
window.addEventListener("DOMContentLoaded",(event)=>{
    console.log("DOM completamente cargado y procesado");

    const menuBtn=document.getElementById("myDIV");
    
    

    menuBtn.addEventListener("click", (event)=>{
        var x = document.getElementById("myDIV");

        /*const x = document.getElementById("myDIV");  */
            if (x.innerHTML === "Enviar mensaje") {
                x.innerHTML = "Mensaje enviado";
            } else {
                x.innerHTML = "Enviar mensaje";
            }
    })
    

})