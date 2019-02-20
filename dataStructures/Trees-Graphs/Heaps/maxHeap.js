/* Min-Heap: Where the value of the root node is greater than or equal to either of its children.

important equations for using an array

left child: index * 2 + 1
right child: index * 2 + 2
parent: floorof (index-1) /2
*/
class maxHeap {
    constructor(){
        this.heap = [];
    }
    
    //helper methods
    getLeftChildIndex(parentIndex){return parentIndex * 2 +1;}
    getRightChildIndex(parentIndex){return parentIndex * 2 + 2;}
    getParentIndex(childIndex){return Math.floor((childIndex-1)/2); } 
    
    leftChild(index){return this.heap[this.getLeftChildIndex(index)];}
    
    rightChild(index){return this.heap[this.getrRightChildIndex(index)];}
    
    parent(index){return this.heap[this.getParentIndex(index)];}
    
    swap(indexOne, indexTwo){
        console.log('swap')
        let temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }
    
    isEmpty(){
        return this.heap.length === 0;
    }
    peek(){
        //returns the root/first element
        if(this.isEmpty()){console.log('Empty Heap')}
        else{return this.heap[0];}
    }
    print(){
        for(let i =0; i<this.heap.length;i++){
            console.log(`[${i}] - ${this.heap[i]}`);
        }
    }
    insert(data){
        //add the new item to the end
        this.heap.push(data);
        
        //after we have a root node
        if(this.heap.length >1){
            
            //grab last element(the one that was just added)
            let index = this.heap.length - 1;
            while(this.parent(index) < this.heap[index]){
                
                //while the current items parent is smaller than current item
                this.swap(this.getParentIndex(index),index); //swap
                index = this.getParentIndex(index);
            }
        }
    }
}

//test

let maxH = new maxHeap();

maxH.insert(35);
maxH.insert(33);
maxH.insert(44);
maxH.insert(104);
maxH.print();
