let validar = 0;
let mensaje = "";

const regexNombre = /^[A-Za-z]+$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexTel = /^[0-9-]+$/;

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const submit = document.getElementById("submit");



submit.addEventListener("click", function() {

    if(nombre.value == ""){
        validar = 1;
    }
    else{
        if(!regexNombre.test(nombre.value)){
            validar = 2;
        }
    }

    if(apellido.value == "" && validar == 0){
        validar = 3;
    }
    else{
        if(!regexNombre.test(apellido.value) && validar == 0){
            validar = 4;
        }
    }

    if(email.value == "" && validar == 0){
        validar = 5;
    }
    else{
        if((!regexEmail.test(email.value)) && (validar == 0)){
            validar = 6;
        }
    }

    if(telefono.value == "" && validar == 0){
        validar = 7;
    }
    else{
        if(!regexTel.test(telefono.value) && (validar == 0)){
            validar = 8;
        }
    }

    switch (validar){
        case 0:
            //alert("Datos Enviados");
            mostrarPopup();
            nombre.value = "";
            apellido.value = "";
            email.value = "";
            telefono.value = "";
        break;
        case 1:
            alert("Falto completar el Nombre.");
            nombre.focus();
        break;
        case 2:
            validar = 0;
            alert("Solo se permiten letras en el Nombre.");
            nombre.focus();
        break;
        case 3:
            validar = 0;
            alert("Falto completar el Apellido.");
            apellido.focus();
        break;
        case 4:
            validar = 0;
            alert("Solo se permiten letras en el Apellido.");
            apellido.focus();
        break;
        case 5:
            validar = 0;
            alert("Falta completar el E-mail.");
            email.focus();
        break;
        case 6:
            validar = 0;
            alert("Vrifique el formato del E-mail.");
            email.focus();
        break;
        case 7:
            validar = 0;
            alert("Falta completar el Telefono.");
            email.focus();
        break;
        case 8:
            validar = 0;
            alert("Vrifique el telefono que este correctamente ingresado.");
            email.focus();
        break;

    }

});


function mostrarPopup() {
    document.getElementById('popup-fondo').style.display = 'flex';
}

function cerrarPopup() {
    document.getElementById('popup-fondo').style.display = 'none';
}






