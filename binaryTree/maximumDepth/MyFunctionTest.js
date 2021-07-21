const BinaryTree = require('../BinaryTree');
const myFunction = require('./MyFunction');

    let binaryTree = new BinaryTree();

    binaryTree.add(8);
    binaryTree.add(6);
    binaryTree.add(15);
    binaryTree.add(4);
    binaryTree.add(7);
    binaryTree.add(11);
    binaryTree.add(16);
    // binaryTree.add(1);
    // binaryTree.add(5);
    binaryTree.add(9);
    binaryTree.add(13);
    binaryTree.add(19);
    binaryTree.add(25);

    console.log(myFunction(binaryTree));
    debugger;

