/*A trie is a tree-like data structure whose nodes store the letters of an alphabet. 
By structuring the nodes in a particular way, words and strings can be retrieved from the structure by traversing down a branch path of the tree.*/

class TrieNode{
    constructor(letter=''){
        this.val = letter;
        this.children = {};
        this.prefixes=0;
        this.endOfString = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
        this.count = 0;
    }
    
    insert(word){
        //start at the root node
        let node = this.root;
        
        //iterate through word
        for(let i=0; i < word.length;i++){
            //map 'word's' characters to a path in the trie
            node.prefixes++;//increments everytime this current node is part of a prefix
            let currentLetter = word[i];
            
            if(node.children[currentLetter]){//exists
                node = node.children[currentLetter]
            }else{
                let newNode = new TrieNode(currentLetter); // create a new node with new letter
                node.children[currentLetter] = newNode; // create the link from parent to child
                node = newNode;
            }
        }
        this.count++;
        node.endOfString = true; // this is the end of inserted string
    }
    
    find(word){
        let node = this.root;// start by iterating through the word
        
        //if full path exists then the word exists in the trie, if not the trie does not contain the word
        //search hit vs search miss
        for(let i =0;i<word.length;i++){
            let currentLetter = word[i];
            
            if (node.children[currentLetter]){
                node = node.children[currentLetter]
            }else{
                return false;
            }
        }
        
        return node.endOfString; // if the loop ends and the node we end on is the end of string
    }
    
    remove(word){
        
        //if empty
        if(!this.root){
            return;
        }
        //check if the trie contains the word...remove it
        if(this.find(word)){
            this._removeNode(this.root,word);
            this.count--;
        }
        else{
            console.log( `${word} is not in the trie`)
        }
        
    }
    
    _removeNode(node,word){
        
        /*
Key may not be there in trie. Delete operation should not modify trie.
Key present as unique key (no part of key contains another key (prefix), nor the key itself is prefix of another key in trie). Delete all the nodes.
Key is prefix key of another long key in trie. Unmark the leaf node.
Key present in trie, having atleast one other key as prefix key. Delete nodes from end of key until first leaf node of longest prefix key.*/
        if(!node||!word){
            return;
        }
        
        let letter = word[0];
        let child = node.children[letter];
        
        //if the child exists
        if(child){
            let remainder = word.substring(1); // get the remainding part of the word excluding teh first character
            if(remainder){
                if(child.prefixes ===1){
                    node.children[letter] = null;
                } else {
                    this._removeNode(child,remainder);
                }
            }else{
                if(child.prefixes === 0){
                    node.children[letter] = null;
                }else {
                    child.endOfString = false; 
                }
            }
        }
        
        
        
    }
    
    print(){
        
        if(!this.root){
            console.log('No root found')
        }
        
        
        let words = [];
        let word = '';
        
        
        
        let search = function(node,word){//iterate through each child. construct a string until end of word is reached. add to array
            for(let child in node.children){
                if(node.children.hasOwnProperty(child)){
                    word+= child;
                    
                    if(node.children[child].endOfString){
                        words.push(word);
                    }
                    search(node.children[child],word);
                    word = word.substring(0,word.length -1);
                  
                }
            }
            
        }
        search(this.root, word )
        return words;
    }
    
    size(){
        return this.count;
    }
}


//test 

let trye = new Trie();

trye.insert('hello');
trye.insert('hellos');trye.insert('hallo');trye.insert('hellow');trye.insert('heylo');
trye.insert('away');
trye.insert('help');
trye.insert('awa');
trye.insert('hell');

//console.log(trye.find('help'));//true
//
//console.log(trye.find('hel')); //false
//
//console.log(trye.find('hello'));//true
//
//console.log(trye.find('away'));//true
//
//console.log(trye.find('awa'));//false

console.log(trye.print());//before delete: ['hello','help','awa','away']

console.log(trye.size())//4

trye.remove('awa');

console.log(trye.print());

trye.remove('hell');
trye.remove('hell');//cannot remove
console.log(trye.print());
console.log(trye.size())//3
