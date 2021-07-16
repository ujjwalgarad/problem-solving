const LinkedList = require('../LinkedList');
const myFunction = require('./MyFunction');

    let linkedList1 = new LinkedList();
    let linkedList2 = new LinkedList();

    linkedList1.addAtTail(1);
    linkedList1.addAtTail(2);
    linkedList1.addAtTail(4);
    linkedList2.addAtTail(1);
    linkedList2.addAtTail(3);
    linkedList2.addAtTail(4);

    console.log(myFunction(linkedList1, linkedList2));
    debugger;

