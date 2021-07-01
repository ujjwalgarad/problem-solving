import { Node } from './Node.js';

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
        this.head - node;
    }

    addAtTail(val){
        let node = new Node(val);
        let pointer = this.head;

        while(!pointer.next){
            pointer = pointer.next;
        }

        pointer.next = node;
    }

    addAtIndex(index, val){
        let node = new Node(val);
        let pointer = this.head;
        let next = pointer.next;

        let count = 0;
        while(pointer){
            if(count == index){
                if(!next){
                    pointer.next = node;
                }else{
                    
                }

            }
        }
    }
}

module.exports = LinkedList;