// const LinkedList = require('../Binary');

const myFunction = (inOrder, postOrder) =>{
    let inorderMap = new Map();

    for (let i = 0; i < inOrder.length; i++) {
        inorderMap.set(inOrder[i], i);
    }

    for (let i = postOrder.length; i >= 0; i--) {
        let node = new Node(postOrder[i]);
        node.left = 
        
    }

}



module.exports = myFunction;