//this implementation does not use linked lists
//LIFO - Last In First Out
class Stack {
  constructor(){
    this.items = [];
  }
  push(item){
    //add item to the top of the stack
    this.items.push(item);
  }
  pop(){
    //delete top element
    if(this.isEmpty()){
      return 'Empty Stack'
    }
    else{
      return this.items.pop();
    }

  }
  peek(){
    //return the top of the stack
    return this.items[this.items.length -1];
  }
  isEmpty(){
    //returns true if stack is empty
    return this.items.length === 0;
  }
  print(){
    let str = "";
    for(let i =0; i<this.items.length;i++){
      str += this.items[i] + " "
    }
    console.log(str + ' <- TOP');
  }
}

//test

let stk = new Stack();

for(let i=0;i<5;i++){
  stk.push(i);
}

stk.print();
console.log(`Top of the stack: ${stk.peek()}`);
console.log(`POP: ${stk.pop()}`);
console.log(`Top of the stack: ${stk.peek()}`);
stk.push(10);
console.log(`Top of the stack: ${stk.peek()}`);
stk.print();
