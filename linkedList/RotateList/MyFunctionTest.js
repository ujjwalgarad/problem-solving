const LinkedList = require('../LinkedList');
const myFunction = require('./MyFunction');

    let linkedList1 = new LinkedList();

    linkedList1.addAtTail(1);
    linkedList1.addAtTail(2);
    linkedList1.addAtTail(3);
    linkedList1.addAtTail(4);
    linkedList1.addAtTail(5);
    // linkedList2.addAtTail(1);

    console.log(myFunction(linkedList1, 4));
    debugger;