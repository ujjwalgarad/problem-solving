// const LinkedList = require('../LinkedList');

const myFunction = (linkedList) =>{

    let start = linkedList.head;
    let curr = start.next;

    while(curr){
        start.next = curr.next;
        curr.next = linkedList.head;
        linkedList.head = curr;
        curr = start.next;
    }
    return linkedList;
}

module.exports = myFunction;