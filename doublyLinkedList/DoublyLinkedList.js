const Node = require('./Node');

class DoublyLinkedList{
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
                return pointer.val;

            pointer = pointer.next;
            count++;
        }

        return -1;
    }

    addAtHead(val){
        let node = new Node(val);
        node.next = this.head;
        
        if(this.head){
            this.head.prev = node;
        }
        
        this.head = node;
    }

    addAtTail(val){
        let node = new Node(val);

        if(this.head){
            let pointer = this.head;
            while(pointer.next){
                pointer = pointer.next;
            }
    
            pointer.next = node;
            node.prev = pointer;
        }else{
            this.head = node;
        }
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
                node.prev = prev;
                return;
            }else{
                count++;
                prev = prev.next;
            }
        }
    }

    deleteAtIndex(index){
        debugger;
        if(index == 0){
            let toBeDeleted = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            toBeDeleted.next = null;
            return true;
        }

        let prev = this.head;
        let toBeDeleted = prev.next;

        let count = 1;

        while(toBeDeleted){
            if(count == index){
                prev.next = toBeDeleted.next;
                
                if(toBeDeleted.next){
                    toBeDeleted.next.prev = prev;
                }
                
                toBeDeleted.next = null;
                toBeDeleted.prev = null;
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

module.exports = DoublyLinkedList;