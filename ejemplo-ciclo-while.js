//EJEMPLO DE CICLO WHILE
//ALMACENAR PASATIEMPOS EN UN ARRAY USANDO METODO PUSH()

var accesoInvitado = true;

//WHILE significa "mientras" 
//MIENTRAS opcion sea igual a true
while (accesoInvitado == true) {

    //ventana emergente con saludo
    alert("Bienvenido Señor...!"); 

    //ok = true 
    //cancelar = false
    accesoInvitado = confirm("Entrará otro invitado? \n ACEPTAR = SI \n CANCELAR = NO");
}


