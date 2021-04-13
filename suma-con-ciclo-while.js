var numero1 = null;
var numero2 = null;
var suma = null;

numero1 = prompt("Inserta el numero #1: ");
numero2 = prompt("Inserta el numero #2: ");

/*convertir el tipo de datos de
 las variables de string a number */
suma = Number(numero1) + Number(numero2);

alert("El resultado es: " + suma);