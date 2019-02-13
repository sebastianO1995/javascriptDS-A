const node = require('./nodeSLL.js');

class SLL {

    constructor(){
        
        this.head = null;
        this.length = 0;
    }
     

    
    size () {
        return this.length;
    }
    isEmpty() {
        return this.length === 0;
    }
    add(element) {
        
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
    
    print(){
        
        let current = this.head;
        while(current !=null){
            console.log(current.data + '->');
             current = current.next;
        }
    }
    



}

//TEST
let newList = new SLL();

newList.add(5);
newList.add(8);
newList.add(6);
newList.add(3);
newList.print();
console.log(newList.size());

