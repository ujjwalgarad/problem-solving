// const LinkedList = require('../Binary');

const myFunction = (binaryTree) =>{
    if(!binaryTree.head){
        return false;
    }

    let queue = [];
    queue.push(binaryTree.head);

    while(queue.length){
        let node = queue.shift();

        if(node.left && node.right){
            node.left.next = node.right;
        
            if(node.next){
                node.right.next = node.next.left;
            }

            queue.push(node.left);
            queue.push(node.right);
        }
    }

    return binaryTree;
}

module.exports = myFunction;