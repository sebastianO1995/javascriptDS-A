//Binary Search Tree

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
    
    add(data){
        //reference to the root node
        const node = this.root;
        //if empty then add new node
        if(node ===null){
            this.root = new Node(data);
            return;
        } else{//recursively 
            const searchTree = function(node){
              if(data < node.data){
                  if(node.left ===null){
                      node.left = new Node(data);
                      return;
                  }else if(node.left !=null){
                      return searchTree(node.left);
                  }
                }else if(data >node.data){
                    if(node.right ===null){
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
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data; // swap values now we need to delete
          //recursive
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
    this.root = removeNode(this.root, data); //calls function 
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
        
        
}


//test

let bst = new BST();

bst.add(40);
bst.add(25);
bst.add(10);
bst.add(32);
bst.add(78);
bst.add(100);
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
