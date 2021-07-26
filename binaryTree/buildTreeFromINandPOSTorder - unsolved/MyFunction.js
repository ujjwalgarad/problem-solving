// https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/942/

// const LinkedList = require('../Binary');
const BinaryTree = require('../BinaryTree');
const Node = require('../Node');

const myFunction = (inOrder, postOrder) =>{
    let inorderMap = new Map();

    for (let i = 0; i < inOrder.length; i++) {
        inorderMap.set(inOrder[i], i);
    }

    let binaryTree = new BinaryTree();

    binaryTree.head = constructTreeRec(postOrder, postOrder.length-1, inorderMap, inOrder);

    return binaryTree;
}

const constructTreeRec = (postOrder, pivotIndex, inorderMap, subArray) =>{
    if(subArray.length == 1){
        return new Node(postOrder[pivotIndex]);
    }

    let node = new Node(postOrder[pivotIndex]);
    
    let splitIndex = inorderMap.get(postOrder[pivotIndex]);
    let leftSubArray = subArray.slice(0, splitIndex);
    let rightSubArray = subArray.slice(splitIndex +1, subArray.length);

    node.right = constructTreeRec(postOrder, pivotIndex -1, inorderMap, rightSubArray);
    node.left = constructTreeRec(postOrder, pivotIndex -1, inorderMap, leftSubArray);
    
    return node;
}


module.exports = myFunction;