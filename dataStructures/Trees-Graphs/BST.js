//Binary Search Tree

//The left sub-tree of a node has a key less than or equal to its parent node's key.

//The right sub-tree of a node has a key greater than to its parent node's key.

class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }

}

class BST {
    constructor() {
        this.root = null;
    }
    getRoot(){
        return this.root.data;
    }
    add(data){
        
        /*Whenever an element is to be inserted, first locate its proper location. Start searching from the root node, then if the data is less than the key value, search for the empty location in the left subtree and insert the data. Otherwise, search for the empty location in the right subtree and insert the data.*/
        //reference to the root node
        const node = this.root;
        //if empty then add new node
        if(node ===null){
            this.root = new Node(data);
            return;
        } else{//recursively 
            const searchTree = function(node){
              if(data < node.data){
                  //if left is null insert node here
                  if(node.left ===null){
                      node.left = new Node(data);
                      return;
                  }else if(node.left !=null){
                      return searchTree(node.left);//recurr until node is found
                  }
                }else if(data >node.data){//if new data is more than the node
                    if(node.right ===null){//right null is empty..insert
                        node.right = new Node(data);
                        return;
                    }else if(node.right !== null){
                        return searchTree(node.right);
                    }
                    
                }  else {
                    return null;
                }
            };
            return searchTree(node); //main call to the searchTree function
        }
    }
    
    

    remove(data) {
    //recursive
    const removeNode = function(node, data) {
        //empty tree?
      if (node == null) {
        return null;
      }
        //find data in the tree
      if (data === node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right; //replace with right node
        }
        // node has no right child 
        if (node.right == null) {
          return node.left; //replace with left node
        }
        // node has two children 
        var tempNode = node.right; 
        while (tempNode.left !== null) { //look at the nodes right child. Find the right childs min left child
          tempNode = tempNode.left;
        }
          //now we have the min value from the right 
        node.data = tempNode.data; // swap the value to be deleted with min value
          //remove the swapped value from the tree rcursively
        node.right = removeNode(node.right, tempNode.data);
        return node;
          
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node; // keep searching
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data) //calls function 
  }
    
   inOrder(){
//       In this traversal method, the left subtree is visited first, then the root and later the right sub-tree. 
//       We should always remember that every node may represent a subtree itself. //Ascending order
   
       //check if the tree is empty
       if(this.root === null){
            //return null;
           console.log('EMPTY')
       }else{
           function traverseIO(node){
               //if node exists
               if(node){
                  traverseIO(node.left);
                  console.log(node.data);
                  traverseIO(node.right);
               }
            }
           traverseIO(this.root);//invoke traversal
       }
   }
    postOrder(){
        
        //the root node is visited last
       // First we traverse the left subtree, then the right subtree and finally the root node.
        //empty tree
        if(this.root === null){
            //return null;
           console.log('EMPTY')
       }else{
           function traversePO(node){
               if(node){
                   traversePO(node.left);
                   
                   traversePO(node.right);
                   
                   console.log(node.data)
               }
           }
           
           //invoke function
           traversePO(this.root);
       }
    }
    
    preOrder(){
        
        //the root node is visited first, then the left subtree and finally the right subtree.
        if(this.root === null){
            //return null;
           console.log('EMPTY')
       }else{
           
           function traversePre(node){
               if(node){
                   console.log(node.data);
                   traversePre(node.left);
                   traversePre(node.right);
               }
           }
           //invoke
           traversePre(this.root);
       }
    }
    
    levelOrder(){
        let result = []; // holds the level ordered 
        let Q = []; 
        //start with the root
      if (this.root != null) {
          Q.push(this.root);//add to queue
          while(Q.length > 0) { //while there are still elements in the queue
              let node = Q.shift(); //remove first element in the queue
              result.push(node.data); //add it to results
              if (node.left != null) { // if the left child exists, add it to the queue
                  Q.push(node.left);
              };
              if (node.right != null) { //if the right child exists, add it to the queue
                  Q.push(node.right);
              };
          };
          return result;
      } else {
          return null;
      };
  
}
    
    min(){
    //find the min value in the bst
        let current = this.root;
        while(current.left!==null){
            current = current.left;
        }
        return current.data;
    }
    
    max(){
        //find the max value in the bst
        let current = this.root;
        while(current.right!==null){
            current = current.right;
        }
        return current.data;
    }
    
    find(data){
        //search for a specific value
        //returns true if it exists
        let current = this.root;
        
        while(current){
            if(current.data === data){
                return true;
            }
            else if( current.data > data){//search left
                current = current.left;
            }
            else{//search right
                current = current.right;
            }
        }
        return false;
    }
    
    findH(node){
            if(node === null){
                return -1; //no node
            }
            
            let left = this.findH(node.left);
            let right = this.findH(node.right);
            
            //find the max of the two
            if(left > right){
                return left +1;
            } else {
                return right + 1;
            }
        }
    height(){
        //The height of a tree is the length of the path from the root to the deepest node in the tree. A (rooted) tree with only a node (the root) has a height of zero
        
        return this.findH(this.root);
    }
     _isBalanced(node){
            
            if(!node){
                return true;
            }
            
            let left = this.findH(node.left)
            let right = this.findH(node.right);
            //find height of the left node
            //find height of the right node
            let diff = Math.abs(left-right);
            //find the abs difference
            
         if(diff > 1){
             return false;
         }
         else {
             return this._isBalanced(node.left) && this._isBalanced(node.right);
         }
            //check if difference is  > 1 then return false else return left_isbalanced and rightIs balanced..both have to be true
        }
    isBalanced(){
              
        return this._isBalanced(this.root)
        
    }
    
        
        
}


//test

let bst = new BST();

bst.add(40);
bst.add(25);
bst.add(10);
bst.add(32);
bst.add(78);
bst.add(50);
bst.add(100);

//for(let i =0; i<6; i++){
//    bst.add(i);
//}
//console.log(`Level Ordered ${bst.levelOrder()}`)//40-25-78-10-32-100
//console.log(`${bst.isBalanced()}`);// true
//console.log(`Height: ${bst.height()}`)//2
//bst.inOrder(); //10-25-32-40-78
//bst.postOrder(); //10-32-25-78-40
//bst.preOrder(); //40-25-10-32-78
//console.log(`The min value in the BST: ${bst.min()}`);//10
//
//console.log(`The max value in the BST: ${bst.max()}`);//78
//
//console.log(`Is 10 in the tree?: ${bst.find(10)}`);//true
//
//console.log(`Is 99 in the tree?: ${bst.find(99)}`);//false
bst.remove(40);

console.log(`Level Ordered ${bst.levelOrder()} with root: ${bst.getRoot()}`);//78-25-100-10-32
