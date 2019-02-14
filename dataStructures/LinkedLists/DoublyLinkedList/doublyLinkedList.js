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
      if(this.isEmpty()){
          throw "List is empty. Cannot delete first element of an empty list."
      } else {
          if(this.tail.prev === null && this.tail.next === null){
              //there is only one element, NOTE: I could also check the length of the list
              this.tail = null;
              this.head = null;
          } else {
                this.tail = this.tail.prev; //set new tail
                this.tail.next = null; // remove last
          }
          this.length--;
      }
  }

  insertAfter(prevElement, element){
    //insert an element after an item of the list
      let newNode = new node(element);
      let prevIndex = this.indexOf(prevElement);
     
      if(this.isEmpty()){throw "List is empty. Cannot Insert.";}
      if(prevIndex === -1){throw `${prevElement} does not exist. Cannot insert new element after a non-existent element`;}
      else{
          //check if prevElement is at the end. Then insert last
          if(this.tail.data === prevElement){
              this.insertLast(element);
          }
          else{
              let current = this.head;
            while(current){
                if(current.data === prevElement){
                    ///insert
                    newNode.prev = current;
                    newNode.next = current.next;
                    current.next.prev = newNode;
                    current.next = newNode;
                    this.length++;
                    break;
                }
                else{
                    current = current.next;
                }
            }
          }
         
      }
      
  }
    
    indexOf(element){
        
         // check if element exists in the list. return the index of first
      // occurence
      // return -1 if it does not exists

      let current = this.head;
      let index = -1;

      while(current){
        index++;
        if(current.data === element){
          return index;
        }
        current = current.next;
      }
      return -1; //not found
    }

  remove(element){
    //remove first occurence of element from the list with given key
       if(this.isEmpty()){
      throw "List is empty. Cannot delete element of an empty list."
    }
      else{
          let current = this.head;
          
          while(current){
              if(current.data === element){
                  //match
                  current.prev.next = current.next;
                  current.next.prev = current.prev;
                  break;
              }
              else{
                  current = current.next;
              }
          }
          this.length--;
      }
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
      let current = this.tail;
      console.log('NULL');
      
      while(current){
          console.log(`<- ${current.data} ->`);
          current = current.prev;
      }
      
      console.log('NULL');
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

//try{
//  let dll = new DLL();
//    
//    
//    for ( let i = 1; i <6; i++){
//        dll.insertFirst(i);
//    }
//       
//    dll.displayForward();//5 - 4 - 3 -2 - 1
//    dll.insertLast(6); //5 - 4 - 3 -2 - 1 - 6
//    dll.deleteFirst(); // 4 - 3 - 2 - 1 - 6
//    console.log(`Index of element 2: ${dll.indexOf(2)}`);//2
//    console.log(`Size: ${dll.size()} \n`);//5
//    
//    
//    dll.deleteLast(); // 4 - 3 - 2 -1 
//    dll.displayBackward(); // 1 - 2 - 3 - 4
//    
//    console.log('\n');
//    dll.insertAfter(4, 6); //1 - 2 - 3 - 6 - 4
//    dll.insertAfter(6, 11); // 1 - 2 - 3 - 11 - 6 -4
//    dll.displayForward(); // 4 - 6 - 11 - 3 -2 - 1
//    
//    console.log(`Size: ${dll.size()} \n`);//6
//    
//    console.log('\n');
//    
//    dll.remove(3); //4 - 6 - 11  - 2 - 1
//    
//    console.log(`Size: ${dll.size()} \n`);//5
//    dll.insertLast(7); //4 - 6 - 11  - 2 - 1 - 7
//    dll.displayBackward(); //7 - 1 - 2 - 11 - 6 - 4
//    console.log(`Size: ${dll.size()} \n`);//6
//    
//    console.log(`Index of element 99: ${dll.indexOf(99)}`);//-1
//   // dll.insertAfter(99,1);//does not exist
//   
//  
//}
//catch(e){
//  console.log(e);
//}
