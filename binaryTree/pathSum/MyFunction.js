// const LinkedList = require('../Binary');

const myFunction = (binaryTree, sum) =>{
    if(!binaryTree.head){
        return false;
    }

    return checkPathSum(binaryTree.head, sum);
}

const checkPathSum = (node, remAtThisNode) =>{
    if(!node && remAtThisNode == 0){
        return true;
    }

    if(!node && remAtThisNode != 0){
        return false;
    }

    let diff = remAtThisNode - node.val;
    return checkPathSum(node.left, diff) || checkPathSum(node.right, diff); 
}


module.exports = myFunction;