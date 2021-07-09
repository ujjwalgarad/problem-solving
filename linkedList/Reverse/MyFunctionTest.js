const LinkedList = require('../LinkedList');
const myFunction = require('./MyFunction');

    let linkedList = new LinkedList();

    linkedList.addAtHead(5);
    linkedList.addAtHead(4);
    linkedList.addAtHead(3);
    linkedList.addAtHead(2);
    linkedList.addAtHead(1);

    console.log(linkedList);
    console.log(myFunction(linkedList));

