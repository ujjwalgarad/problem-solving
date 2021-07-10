// const LinkedList = require('../LinkedList');

// const myFunction = (linkedList, node) =>{

//     //if its the last node, make it head and return it
//     if(!node.next){
//         linkedList.head = node;
//         return node;
//     }

//     //if it is not last node
//     let returned = myFunction(linkedList, node.next);
//     //assign yourself as the next of the returned node
//     returned.next = node;

//     //make your next as null
//     //it is necessary step coz for middle nodes, the next is reassigned to their prev nodes okay
//     //but for the first node - which now will become the last node - should have its next as null
//     node.next = null;

//     return node;
// }

const myFunction = (node) =>{

    if(!node.next){
        return node;
    }

    let head = myFunction(node.next);
    node.next.next = node;
    node.next = null;
    return head;
}

module.exports = myFunction;