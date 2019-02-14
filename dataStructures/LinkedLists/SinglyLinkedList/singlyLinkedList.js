const node = require('./nodeSLL.js');

class SLL {

    constructor(){

        this.head = null;
        this.length = 0;
    }

    size () {

      //returns the size of the list
        return this.length;
    }
    isEmpty() {
      //checks if the list is empty
        return this.length === 0;
    }
    insertFirst(element){
      //adds an element to the beginning of the newList
      const newNode = new node(element);

      if(this.isEmpty()){
        this.head = newNode;

      }
      else{

        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
    }

    add(element) {
      //adds a new node to the end of the list

        const newNode = new node(element);
        //check if list is empty
        if(this.isEmpty()){
            this.head = newNode;

        }
        else{
            //not empty so we traverse until we find an empty spot
            let currentNode = this.head;
            while(currentNode.next != null){
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }

        this.length++;


    }

    remove(element) {
      //Delete first occurence of key
      let current = this.head;
      if(this.isEmpty()){
        //if the list is empty then return cannot remove item
        console.log('Cannot remove ' + element + ' - the list is empty');

      }
      else if(this.head.data === element){
        //if the head is a match
        this.head = current.next; // new head is head's next element
        this.length--;

      }
      else{
        let prevNode = this.head;
        let currentNode = prevNode.next;
        let found = false;

        //if there is a match then remove the node with the element.
        //Set found to true
        while(currentNode){
          if(currentNode.data === element){
            prevNode.next = currentNode.next;
            currentNode = currentNode.next
            this.length--;
            found = true;
            break;
          } else{
            //no match, keep iterating.
            prevNode = currentNode;
            currentNode = currentNode.next;
          }
        }
        if(!found){
          console.log(`${element} does not exist in the list.`);
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



    print(){

        let current = this.head;
        while(current !=null){
            console.log(current.data + '->');
             current = current.next;
        }
    }




}

//TEST
// let newList = new SLL();
//
// for(let i =0; i<5;i++){
//   newList.add(i)
// }
// newList.print();
// console.log(`Index of ${4}: ${newList.indexOf(4)}`);
// console.log('Removing: 4');
// newList.remove(4);
// newList.insertFirst(100);newList.insertFirst(44);newList.insertFirst(55);
// newList.remove(22);newList.remove(44);
// newList.add(69);
// newList.print();
//
// console.log(`Size: ${newList.size()}`);

// let cars = new SLL();
// 
// cars.insertFirst('Honda');
// cars.add('Chevy');
// cars.insertFirst('Audi');
// cars.print();
// cars.indexOf('Chevy'); // 1
// console.log(cars.size());//3
// cars.remove('Mazda')// does not exists
// cars.remove('Honda');
// cars.print();
