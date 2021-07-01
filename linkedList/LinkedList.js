const Node = require('./Node');

class LinkedList{
    constructor(){
        this.head = null;
    }

    get(index){
        let pointer = this.head;

        if(!pointer)
            return -1;

        let count = 0;
        while(pointer){
            if(count == index)
                return pointer.val

            pointer = pointer.next;
            count++;
        }

        return -1;
    }

    addAtHead(val){
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
    }

    addAtTail(val){
        let node = new Node(val);
        let pointer = this.head;

        while(pointer.next){
            pointer = pointer.next;
        }

        pointer.next = node;
    }

    addAtIndex(index, val){
        if(index == 0){
            this.addAtHead(val);
            return;
        }

        let node = new Node(val);
        let prev = this.head;

        let count = 1;

        while(prev){
            if(count == index){
                node.next = prev.next;
                prev.next = node;
                return;
            }else{
                count++;
                prev = prev.next;
            }
        }
    }

    deleteAtIndex(index){
        if(index == 0){
            let toBeDeleted = this.head;
            this.head = this.head.next;
            toBeDeleted.next = null;
            return true;
        }

        let prev = this.head;
        let toBeDeleted = prev.next;

        let count = 1;

        while(toBeDeleted){
            if(count == index){
                prev.next = toBeDeleted.next;
                toBeDeleted.next = null;
                return true;
            }else{
                count++;
                prev = prev.next;
                toBeDeleted = toBeDeleted.next;
            }
        }
        return false;
    }
}

module.exports = LinkedList;