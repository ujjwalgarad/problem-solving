// const LinkedList = require('../Binary');

const myFunction = (binaryTree) =>{
    if(!binaryTree.head){
        return 0;
    }

    return maxDepth(binaryTree.head, 0);
}


//this top down approach
//it is adding 1 to the value of depth for each call to the next level
const maxDepth = (node, depth) =>{
    if(!node){
        return depth;
    }

    depth += 1;
    let left = maxDepth(node.left, depth);
    let right = maxDepth(node.right, depth);

    return Math.max(left, right);
}


module.exports = myFunction;