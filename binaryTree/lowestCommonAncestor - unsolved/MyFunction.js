// const LinkedList = require('../Binary');
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/
const myFunction = (binaryTree, val1, val2) =>{
    if(!binaryTree.head){
        return null;
    }

    return lowestCommonAnc(binaryTree.head, val1, val2);
}


const lowestCommonAnc = (node, val1, val2) =>{
    if(!node){
        return false;
    }

    let middle = left = right = false;

    if((node.val == val1) || (node.val == val2)){
        middle = true;
    }

    left = lowestCommonAnc(node.left, val1, val2);
    right = lowestCommonAnc(node.right, val1, val2);

    if(left || right || middle){
        return node.val;
    }

}

module.exports = myFunction;