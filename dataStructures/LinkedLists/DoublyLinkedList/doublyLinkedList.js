const node = require('./nodeDLL');


class DLL {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;

  }

  insertFirst(element){
    //add element at the beginning of the list

    let newNode = new node(element);
    if(this.isEmpty()){
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    else{

      newNode.next = this.head;
      newNode.prev = null;
      newNode.next.prev = newNode;
      this.head = newNode;
      this.length++;
    }
  }

  deleteFirst(){
    //delete the element at the beginning of the list

    if(this.isEmpty()){
      throw "List is empty. Cannot delete first element of an empty list."
    }
    else{

      if(this.head.next === null){
        //only one element
        this.tail = null;
        this.head = null;

      }
      else{
        this.head = this.head.next;
        this.head.prev = null;
      }


      this.length--;
    }


  }

  insertLast(element){
    //add element at the end of the list
    let newNode = new node(element);

    if(this.isEmpty()){
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  deleteLast(){
    //delete element at the end of the list
  }

  insertAfter(){
    //insert and element after an item of the list
  }

  remove(element){
    //remove element form the list with given key
  }

  displayForward(){
    //displays the list in forward order head to tail
    let current = this.head;
    console.log('NULL');
    while(current){
      console.log(`<- ${current.data} ->`);
      current = current.next;
    }
    console.log('NULL');
  }

  displayBackward(){
    //displays the list in backwards order tail to head
  }


  size(){
    //returns the size of the list
    return this.length;
  }

  isEmpty(){
    //returns true if the list is empty
    return this.length ===0;
  }


}
//TEST

try{
  let dll = new DLL();
  
}
catch(e){
  console.log(e);
}
