


//Evita que se introducan números y/o tildes. 
document.querySelector(".texto-encriptar").addEventListener("keypress", function (evt) {
    var texto = document.querySelector(".texto-encriptar").value;

    texto = texto.replace(/[áéíóúÁÉÍÓÚäëïöüÄËÏÖÜñÑ[\]\\|/"'-]/g, '');

    document.querySelector(".texto-encriptar").value = texto;

        if ((evt.key < 97 || evt.key > 122))
        {   
            if(evt.which == 32){

            }
            else{
                evt.preventDefault();
            }
            
        } 

   
});

function encriptar(){
    var texto = document.querySelector(".texto-encriptar").value;

    texto = texto.replaceAll(`a`,'ai');
    texto = texto.replaceAll(`e`, `enter`);
    texto = texto.replaceAll(`i`, "imes");
    texto = texto.replaceAll(`o`, "ober");
    texto = texto.replaceAll(`u`, `ufat`);

    document.querySelector("img").style.display = 'none';
    document.getElementById("mensaje").style.display = 'none';
    document.getElementById("texto-a-desencriptar").value = texto;

}


function desencriptar(){
}