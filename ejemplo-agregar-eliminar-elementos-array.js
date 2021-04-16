var nombres = [ ];
var continuar = true;

while(continuar == true ){ 
    nombres.push(prompt("Escribe un nombre: "));
    continuar = confirm("Desea agregar otro nombre? ");
    alert(nombres);
}

console.log(nombres);

continuar = true;
while(continuar == true ){ 
    nombres.pop();
    continuar = confirm("Desea ELIMINAR otro nombre? ");
    alert(nombres);
}

console.log(nombres);




