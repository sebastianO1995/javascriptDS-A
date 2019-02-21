/* Min-Heap: Where the value of the root node is greater than or equal to either of its children.

important equations for using an array

left child: index * 2 + 1
right child: index * 2 + 2
parent: floor of (index-1) /2
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
        //add the new item to the end
        this.heap.push(data);
        
        //after we have a root node
        if(this.heap.length >1){
            
            //grab index of last element(the one that was just added)
            let index = this.heap.length - 1;
            while(this.parent(index) < this.heap[index]){ //is the parent less than the child
                
                //while the current items parent is smaller than current item
                this.swap(this.getParentIndex(index),index); //swap parent with child
                index = this.getParentIndex(index);
            }
        }
    }
    
    delete(){
        //removes root element 
        //if empty
        if(this.heap.length ===0){
            console.log('Empty heap, cannot remove');
        }
        //if only one element
        else if(this.heap.length === 1){
            
            return this.heap.pop();
            
        }
        else{//more than one element 
            //console.log(this.heap)
        let largest = this.heap[0]; 
            //console.log(`popping ${largest}`)
        this.heap[0] = this.heap.pop(); 
        let index = 0; 
        
        while(this.heap[index] <= this.leftChild(index) || this.heap[index] <= this.rightChild(index) ){
            //console.log('Before: ' + this.heap)
         //the current value is less than the children
            //find the largest of the children
            if(this.leftChild(index) >= this.rightChild(index) || this.rightChild(index) === undefined){
                //if left child is bigger than right. swap left with parent
                this.swap(index, this.getLeftChildIndex(index));
                index = this.getLeftChildIndex(index);
            }else{
                //right child is bigger than left child
                //swap parent with right child
                this.swap(index, this.getRightChildIndex(index) || this.leftChild(index) === undefined );
                index = this.getRightChildIndex(index);
            }
        }
        
        return largest; 
        
        }
        
    }
    
    getMax(){
        return this.heap[0];
    }
    
    sort(order){
        let sorted = []
        while(this.heap.length!=0){
         sorted.push(this.delete())
        }
        
        if(order ==='asc'){
            return sorted.reverse();
        }
        else if(order === 'desc'){return sorted}
        else {console.log('specify order')}
    }
}

//test

let maxH = new maxHeap();

for(let i =0;i < 10; i++){
    maxH.insert(i);
}

maxH.print();
//sort
console.log(`\n Sorted: ${maxH.sort('desc')} `)
