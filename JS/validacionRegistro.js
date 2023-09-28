/*
function validarContra() {
    var password1 = document.getElementById("pass").value;
    var password2 = document.getElementById("pass2").value;

    if (password1.length < 8) {
        document.getElementById("contraerror").innerHTML = "La contraseña debe tener al menos 8 caracteres";
        document.getElementById("pass").focus();
        return false;
    } else {
        document.getElementById("contraerror").innerHTML = "";
    }

    if (password2.length < 8) {
        document.getElementById("contraerror2").innerHTML = "La contraseña debe tener al menos 8 caracteres";
        document.getElementById("pass2").focus();
        return false;
    } else {
        document.getElementById("contraerror2").innerHTML = "";
    }

    if (password1 !== password2) {
        document.getElementById("contraerror2").innerHTML = "Las contraseñas deben ser iguales";
        document.getElementById("pass2").focus();
        return false;
    } else {
        document.getElementById("contraerror2").innerHTML = "";
        return password1; // Solo si ambas contraseñas son iguales
    }
}


function validarLista() {
    var lista = document.getElementById("TipoDoc");
    var valorSeleccionado = lista.value;
    var errorLabel = document.getElementById("listaError");

    if (valorSeleccionado === "") {
        errorLabel.innerHTML="Seleccione una opcion";
        lista.focus();
    } else {
        errorLabel.innerHTML = "";
        return valorSeleccionado;
    }
}


function validarNombres(){
    var nombre = document.getElementById("nombres").value;
    if(nombre.length < 3 || nombre===""){
        document.getElementById("errorNom").innerHTML="Llene este campo";
        document.getElementById("nombres").focus();
        return false
    }else{
        document.getElementById("errorNom").innerHTML="";
        return nombre;    
    }
}


function ValidarApe(){
    var ape=document.getElementById("apellidos").value;
    if(ape.length <3 || ape===""){
        document.getElementById("errorApel").innerHTML="Llene este campo";
        document.getElementById("apellidos").focus();
        return false
    }else{
        document.getElementById("errorApel").innerHTML="";
    }
    return true
}

function FechaNacimiento(){
    var FechaNaci= document.getElementById("fecha").value;
    var FechaIngresada = new Date(FechaNaci);
    var fechaActual=new Date();
    if(FechaIngresada===""){
        document.getElementById("errorFecha").innerHTML ="Ingrese su fecha de nacimiento";
        document.getElementById("fecha").focus();
        return false
    }else{
        document.getElementById("errorFecha").innerHTML="";
    }
    if(FechaIngresada>fechaActual){
        document.getElementById("errorFecha").innerHTML ="La fecha de nacimiento no puede ser mayor al dia actual"
    }
    return true
}

function NumeroDocumento(){
    var expReg=/^[0-9]{7,15}$/;
    var numDocuIngresado=document.getElementById("NumDoc").value;
    var DocumentoValido=expReg.test(numDocuIngresado);

    if(DocumentoValido!==true){
        document.getElementById("errorNumDocumento").innerHTML ="Solo se permite numeros";
        document.getElementById("NumDoc").focus() ;
        return false
    }else{
        document.getElementById("errorNumDocumento").innerHTML=""
    }
    return true
}

function Genero(){
    var generos= document.getElementsByName("gender");
    var seleccion =false;

    document.getElementById("errorGenero").innerHTML="";
    for(var i=0; i<generos.length; i++) {    
        if(generos[i].checked) {
            seleccion = true;
            break;
            }
    }
            
    if(!seleccion){
        document.getElementById("errorGenero").innerHTML="Seleccione una opcion";
        return false;
    }
}

function ValidarRegistro(){
    var nombres = validarNombres();
    var contraseña= validarContra();
    var TipoDoc = validarLista();

    if(contraseña== false || TipoDoc ==  false){
        alert("Debe llenar todos los campos de manera correcta");
    }else{
        console.log(contraseña);
        console.log(TipoDoc);
        console.log(nombres);
    }
}
*/

document.getElementById('miFormulario').addEventListener('submit', function (e) {
    e.preventDefault();
  
    var camposVacios = false;
    var campos = this.querySelectorAll('input[type="text"], input[type="email"],input[type="password"],input[type="date"],select, input[type="radio"]:checked');
  
    campos.forEach(function (campo) {
      if (
        (campo.tagName === 'SELECT' && campo.value === '') ||
        (campo.tagName !== 'SELECT' && campo.value.trim() === '') ||
        (campo.type === 'radio' && !campo.checked)
      ) {
        campo.style.border = '2px solid red';
        camposVacios = true;
      } else {
        campo.style.border = '1px solid #ccc'; // Restablece el estilo normal
      }
    });
  
    if (camposVacios) {
      alert('Por favor, complete todos los campos obligatorios.');
      return false;
    }
  
    // Si todos los campos están llenos, puedes enviar el formulario aquí
    this.submit();
  });

