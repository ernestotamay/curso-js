var opcion;

opcion = prompt("Bienvenido a Telcel \nOpcion a-Checar saldo. \nOpcion b-Recargas desde tu tarjeta. \nOpcion c-Hablar con un asesor");

//convertir opcion tipo String en un tipo Number
//opcion = Number(opcion);

switch(opcion){
    case "a":
        alert("El saldo amigo de telcel es...");
    break;

    case "b":
        prompt("Cuanto deseas recargar \n$100 \n$200 \n$500");
    break;

    case "c":
        alert("Contacto a un ejecutivo, espere en la linea...");
    break;

    default:
        alert("La opcion es incorrecta, vuelva a intentar");

}



