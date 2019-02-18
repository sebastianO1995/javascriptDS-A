//Not using linked lists
//First In First Out

class Queue{
  constructor(){
    this.items = [];
  }
  enqueue(item){
    //add item to the end of the list
    this.items.push(item);
  }
  dequeue(){
    //remove first item of the list
    if(this.isEmpty()){
      return 'Empty List'
    }
    else{
      return this.items.shift();
    }
  }
  front(){
    //return top of the queue
    if(this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
  }
  isEmpty(){
    //checks if queue is empty, returns true
    return this.items.length == 0;
  }
  print(){
    //print the elements in the  queue
    var str = "";
    for(let i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    console.log(`Top -> ${str}`)
  }
}


//test

let q = new Queue();

for(let i=0;i<5;i++){
  q.enqueue(i*2);
}

console.log(`The first element is: ${q.front()}`)
q.print();
q.dequeue();
q.print();
console.log(`The first element is: ${q.front()}`)
