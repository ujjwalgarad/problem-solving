const Node = require('./Node');

class LinkedList{
    constructor(){
        this.head = null;
    }

    add(val){
        if(!this.head){
            this.head = new Node(val);
            return;
        }

        this.addRec(this.head, val);
        // let node = new Node(val);
        // if(!this.head){
        //     this.head = node;
        //     return;
        // }

        // let pointer = this.head;
        // while(pointer){
        //     if(node.val < pointer.val){
        //         if(!pointer.left){
        //             pointer.left = node;
        //             return;
        //         }else{
        //             pointer = pointer.left;
        //         }
        //     }else{
        //         if(!pointer.right){
        //             pointer.right = node;
        //             return;
        //         }else{
        //             pointer = pointer.right;
        //         }
        //     }
        // }
    }

    //too many ifs and else..can this be minimized?
    addRec(parent, val){
        if(parent.val > val){
            if(!parent.left){
                parent.left = new Node(val);
            }else{
                this.addRec(parent.left, val);
            }
        }else{
            if(!parent.right){
                parent.right = new Node(val);
            }else{
                this.addRec(parent.right, val);
            }
        }
    }

    inOrder(){
        this.inOrderRec(this.head);
    }

    inOrderRec(node){
        if(!node){
            return;
        }
        this.inOrderRec(node.left);
        console.log(node.val);
        this.inOrderRec(node.right);
    }

    preOrder(){
        this.preOrderRec(this.head);
    }

    preOrderRec(node){
        if(!node){
            return;
        }
        console.log(node.val);
        this.preOrderRec(node.left);
        this.preOrderRec(node.right);
    }

    postOrder(){
        this.postOrderRec(this.head);
    }

    postOrderRec(node){
        if(!node){
            return;
        }
        this.postOrderRec(node.left);
        this.postOrderRec(node.right);
        console.log(node.val);
    }

    levelOrderTraverse(){
        if(!this.head){
            return;
        }

        let queue = [];
        queue.push(this.head);

        while(queue.length){
            let node = queue.shift();
            console.log(node.val);
            
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
    }
}

module.exports = LinkedList;