var lista = [21,11,-3,5,-100,8,12,-43];
var tamanioArray = lista.length;
    console.log(`Lista INICIAL: ${lista}`);
    for (let i=0; i < tamanioArray; i++){
        for (let j=i+1; j < tamanioArray; j++){   
            if (lista[i]>lista[j]){            
                let aux = lista[j];
                lista[j] = lista[i];
                lista[i] = aux;
                //console.log(`intercambios i:lista[${i}]=${lista[i]} - j:lista[${j}]=${lista[j]}`);
            }
            console.log(`intercambios de LISTA: ${lista}`);
        }
    }
    console.log(`Lista ORDENADA: ${lista}`);
