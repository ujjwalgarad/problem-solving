const DoublyLinkedList = require('./DoublyLinkedList');

let linkedList = new DoublyLinkedList();

linkedList.addAtHead(5);
linkedList.addAtHead(4);
linkedList.addAtHead(3);
linkedList.addAtHead(2);
linkedList.addAtHead(1);

debugger;
linkedList.addAtTail(6);
linkedList.addAtTail(7);
linkedList.addAtTail(8);
linkedList.addAtTail(9);
linkedList.addAtTail(10);

debugger;

console.log(linkedList.get(3));
console.log(linkedList.get(0));
console.log(linkedList.get(8));
console.log(linkedList.get(10));

debugger;
// console.log(linkedList.deleteAtIndex(9));
console.log(linkedList.deleteAtIndex(3));
console.log(linkedList.deleteAtIndex(0));
console.log(linkedList.deleteAtIndex(8));
console.log(linkedList.deleteAtIndex(1));
console.log(linkedList.deleteAtIndex(6));
debugger;