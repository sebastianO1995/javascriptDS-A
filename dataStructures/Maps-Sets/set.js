//This set ds extends the JS es 6 Set to implement Union, difference, isSubset

class mySet extends Set{
    constructor(...elems){
        super(elems); // calss parent constructor
    }
    
    union(set2){
        const newSet = new mySet(...[...set2.values(),...this.values()]);
        return newSet;
    }
    
    //A-B all elements which are common in A and B are removed from A
    //{1,2,3} - {2,3,5}= {1}
    
    difference(set2){
        const newSet = new mySet();
        //for each value in this set.. if set2 does not have this value add it to the new set. 
        this.forEach(value => {
            if(!set2.has(value)){
                newSet.add(value)
            }
        })
        return newSet;
    }
    
    isSubset(set2){
        
        for(let it = this.values(),
           val = null; val = it.next().value;){
            if(!set2.has(val)){return false; break;} //if set does not have set1 value - then false
        }
        return true;
        
    }
}

//Test
const set = new mySet(1,2,3,4);
const set2 = new mySet(3,4,5,6);

console.log(set.union(set2));//{3,4,5,6,1,2}

console.log(set.difference(set2));//{1,2}

set.clear();
set2.clear();

set.add(1).add(2);
set2.add(1).add(2).add(3).add(4);

console.log(set.isSubset(set2))//true
console.log(set2.isSubset(set))//false