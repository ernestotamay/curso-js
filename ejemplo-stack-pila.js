//stack es pila en español
class Stack{
    
    
    //es un bloque de codigo inicializador
    constructor(){
        
        //esta pila es un array
        this.stack = [];
    }
    
    //accion insertar
    push(element){
        
        this.stack.push(element);
        return this.stack;
    }

    //accion eliminar
    pop(){
        return this.stack.pop();
    }
    
    //accion de devolver el ultimo plato insertado
    peek(){
        return this.stack[this.stack.length - 1];
    }

    //accion de calcular el tamaño de la pila    
    size(){
        return this.stack.length;
    }

    //accion de imprimir contenido de pila
    print(){
        console.log(this.stack);
    }
}
//declarando a pila como objeto nuevo de "tipo de dato Stack"
//crear un objeto
pila = new Stack();

//imprimir tamaño de pila
pila.size();

//insertar jose en pila
pila.push('Jose');
pila.push('Ernesto'));
pila.push('Tamay');
pila.push('Balam'));
pila.size());

//imprimir toda la pila
pila.print();

//eliminar elementos ultimos
pila.push();
pila.push();

//imprimir toda la pila
pila.print();




