const LinkedList = require('../LinkedList');
const myFunction = require('./MyFunction');

    let linkedList1 = new LinkedList();
    let linkedList2 = new LinkedList();

    linkedList1.addAtTail(9);
    linkedList1.addAtTail(9);
    linkedList1.addAtTail(9);
    linkedList1.addAtTail(9);
    linkedList2.addAtTail(9);
    linkedList2.addAtTail(9);
    linkedList2.addAtTail(9);
    // linkedList2.addAtTail(1);

    console.log(myFunction(linkedList1, linkedList2));
    debugger;

