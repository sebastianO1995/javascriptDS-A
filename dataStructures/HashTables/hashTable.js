//implementation of a hash table not using linkedLists

class HashTable {

  constructor(size){
    this.storage =[];
    this.size = size;
  }

   hash(key,size){

    //convert to string if not a string
    let nkey = key.toString();
    let code = 0;
    for(let i = 0; i<nkey.length;i++){
      code+= nkey.charCodeAt(i);
      //sum all the character codes to create the code
    }
    return code%this.size; //index

  }

  print(){
    console.log(this.storage)
  }
  add(key, value){
    let index = this.hash(key,this.size);
    // if index is undefined
    if(this.storage[index] === undefined){
      this.storage[index] = [[key,value]];
    }
    else{
      //something in the bucket
      let inserted = false;
      for(let i = 0;i<this.storage[index].length;i++){
        if(this.storage[index][i][0] === key){
          //if there is a key in the bucket
          this.storage[index][i][1] = value ;
          inserted = true;
        }
      }
      if(inserted === false){
        this.storage[index].push([key,value]);
      }
    }
  }

  remove(key){
    let index = this.hash(key,this.size);
    //if the length of indexth is 1 and the key is equal to the given key
    if(this.storage[index].length ===1 && this.storage[index][0][0] === key){
      delete this.storage[index];
    }
    else{
      //itereate through each subBucket with that indexth
      for(let i =0;i<this.storage[index].length;i++){
        if(this.storage[index][i][0] === key){
          delete this.storage[index][i];
        }
      }
    }
  }
  lookup(key){
    let index = this.hash(key,this.size);

    //check if index is undefined
    if(this.storage[index] === undefined){
      return undefined;
    }
    else{
      for(let i = 0; i< this.storage[index].length; i++){
        if(this.storage[index][i][0] ===key){
          return this.storage[index][i][1];
        }
      }
    }
  }

}


//test

let ht = new HashTable(5);

ht.add(5,2);
ht.add(3,12);
ht.add(9,100);
ht.add('kool','aid')

ht.print();

let search = 9
console.log(`key: ${search} value: ${ht.lookup(search)}`)

//errors need to be able to traverse empty indexes that have been removed.
