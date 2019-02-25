/*Where the value of the root node is less than or equal to either of its children

important equations for using an array

left child: index * 2 + 1
right child: index * 2 + 2
parent: floor of (index-1) /2

*/

class minHeap{
    constructor(){
        this.heap = []; 
        
    }
    getLeftChildIndex(parentIndex){return parentIndex * 2 +1;}
    getRightChildIndex(parentIndex){return parentIndex * 2 + 2;}
    getParentIndex(childIndex){return Math.floor((childIndex-1)/2); } 
    
    leftChild(index){return this.heap[this.getLeftChildIndex(index)];}
    
    rightChild(index){return this.heap[this.getRightChildIndex(index)];}
    
    parent(index){return this.heap[this.getParentIndex(index)];}
    
    swap(indexOne, indexTwo){
        
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
        
        //push data to end of array then heapify
        this.heap.push(data);
        
        //there are atleast two elements
        if(this.heap.length >1){
            //take the element we just added and compare it with its parent
            let index = this.heap.length - 1;
            while(this.parent(index) > this.heap[index]){ //is the parent greater than the child
                
                
                this.swap(this.getParentIndex(index),index); //swap parent with child
                index = this.getParentIndex(index);
            }
        }
        
    }
    remove(){
        
        if(this.isEmpty()){ //if heap is empty
            console.log('Empty Heap');
        }
        else if(this.heap.length ===1){
            //if there is one element
            return this.heap.pop();
            }
        else{
            //more than one element in the heap
            let smallest = this.heap[0]; //collect the smallest
            this.heap[0] = this.heap.pop();//swap with last element
            //heapify down
            let index = 0;
            while(this.heap[index] >= this.leftChild(index) || this.heap[index] >= this.rightChild(index) ){
            //console.log('Before: ' + this.heap)
         //the current value is greater than the children
            //find the smallest of the children
            if(this.leftChild(index) <= this.rightChild(index) || this.rightChild(index) === undefined){
                //if left child is less than right. swap left with parent
                this.swap(index, this.getLeftChildIndex(index));
                index = this.getLeftChildIndex(index);
            }else{
                //right child is less than left child
                //swap parent with right child
                this.swap(index, this.getRightChildIndex(index));
                index = this.getRightChildIndex(index);
            }
        }
            return smallest;
            
        }
        
    }
    sort(order){
        let sorted = []
        
        while(this.heap.length!=0){
         sorted.push(this.remove())
        }
       
        
        if(order ==='desc'){
           
            return sorted.reverse();
        }
        else if(order === 'asc'){
            
            return sorted}
        else {
              console.log('specify order');}
    }
}





//TEST

let minH = new minHeap();
minH.insert(44);
minH.insert(21);
minH.insert(5);
minH.insert(89);
minH.insert(33);
minH.insert(104);
minH.insert(2);
minH.print()
console.log(`\n Sorted: ${minH.sort('asc')} `)

minH.print();
