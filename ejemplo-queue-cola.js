class Cola{
    constructor() {
      this.arrayQueue = [];
    }
  
    enqueue(element) {
      this.arrayQueue.push(element);
      return this.arrayQueue;
    }
  
    dequeue() {
      return this.arrayQueue.shift();
    }
  
    peek() {
      return this.arrayQueue[0];
    }
  
    size() {
      return this.arrayQueue.length;
    }
  
    isEmpty() {
      return this.arrayQueue.length === 0;
    }
  
    print() {
      return this.arrayQueue;
    }
  }
  
  const cola = new Cola();

  cola.isEmpty();
  
  cola.enqueue("Persona 1");
  cola.enqueue("Persona 2");
  cola.enqueue("Persona 3");
  
  cola.dequeue(); 
  cola.peek();
  cola.print();
  cola.isEmpty();
  