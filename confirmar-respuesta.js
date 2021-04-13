//aceptar es true
//cancelar es false
var respuesta = confirm("Fuera del WHILE. ¿Aceptar=Continuar o Cancelar=Salir?");

//Mientras respuesta sea true se repetira el ciclo
//O mientras la condicion se cumpla se repetira el ciclo
while(respuesta){
    respuesta = confirm("Dentro del WHILE. ¿Aceptar=Continuar o Cancelar=Salir?");
}