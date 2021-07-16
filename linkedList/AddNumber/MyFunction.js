const LinkedList = require('../LinkedList');

const myFunction = (ll1, ll2) =>{
    let result = new LinkedList();

    let pointer1 = ll1.head;
    let pointer2 = ll2.head;

    let carry = 0;

    while(pointer1 && pointer2){
        let temp = parseInt((carry + pointer1.val + pointer2.val) % 10);
        carry = parseInt((carry + pointer1.val + pointer2.val)/10);
        result.addAtTail(temp);
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    while(pointer1){
        let temp = parseInt((carry + pointer1.val) % 10);
        carry = parseInt((carry + pointer1.val)/10);
        result.addAtTail(temp);
        pointer1 = pointer1.next;
    }

    while(pointer2){
        let temp = parseInt((carry + pointer2.val) % 10);
        carry = parseInt((carry + pointer2.val)/10);
        result.addAtTail(temp);
        pointer2 = pointer2.next;
    }

    if(carry == 1){
        result.addAtTail(carry);
    }

    return result;
}


module.exports = myFunction;