//TABLA DE MULTIPLICAR 
//EJEMPLO DE CICLO FOR

var numero;
var resultado;

numero = prompt("Escribe un numero: ");
//convertir texto a numero
numero = Number(numero);

for (let i=1; i <= 10; i++){
    resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}
