// const LinkedList = require('../Binary');
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solution/

const BinaryTree = require('../BinaryTree');
const Node = require('../Node');

//DFS approach
const serialize = (binaryTree) =>{
    if(!binaryTree.head){
        return null;
    }

    let serialized = [];
    
    return recSerialize(binaryTree.head, serialized);
}

const recSerialize = (node, serialized) =>{
    if(!node){
        serialized.push(null);
        return serialized;
    }

    serialized.push(node.val);
    serialized = recSerialize(node.left, serialized);
    serialized = recSerialize(node.right, serialized);
    return serialized;
}

const deSerialize = (serialized) => {
    if(!serialized || !serialized.length){
        return null;
    }

    let binaryTree = new BinaryTree();
    binaryTree.head = recDeserialize(serialized);
    return binaryTree;
}

const recDeserialize = (serialized) => {

    if(!serialized.length){
        return;
    }

    let current = serialized.shift();
    if(!current){
        return null;
    }

    let node = new Node(current);
    // node.val = current;
    node.left = recDeserialize(serialized);
    node.right = recDeserialize(serialized);
    return node;
}

module.exports = {serialize, deSerialize};