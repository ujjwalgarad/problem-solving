// Given the head of a linked list, rotate the list to the right by k places.
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

const LinkedList = require('../LinkedList');

const myFunction = (ll1, k) =>{
    let back = front = ll1.head;

    for(let i=0; i< k; i++){
        front = front.next;
    }

    while(front.next){
        back = back.next;
        front = front.next;
    }

    front.next = ll1.head;
    ll1.head = back.next;
    back.next = null;

    return ll1;
}


module.exports = myFunction;