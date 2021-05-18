var respaldo
var lista = [21,64,44,11,67,99,-3];
var final = lista.length;

    console.log(`Lista INICIAL: ${lista}`);
    for (let posicionMenor=0; posicionMenor < final; posicionMenor++){
        for (let posicionMayor=posicionMenor+1; posicionMayor < final; posicionMayor++){
            if (lista[posicionMenor]>lista[posicionMayor]){            
                copiaSeguridad = lista[posicionMayor];
                lista[posicionMayor] = lista[posicionMenor];
                lista[posicionMenor] = copiaSeguridad;
            }
            console.log(`intercambios de LISTA: ${lista}`);
        }
    }

    console.log(`Lista ORDENADA: ${lista}`);