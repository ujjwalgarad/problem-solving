const LinkedList = require('../LinkedList');


//this creates a new LL - extra space
// const myFunction = (ll1, ll2) =>{
//     let result = new LinkedList();

//     let pointer1 = ll1.head;
//     let pointer2 = ll2.head;

//     while(pointer1 && pointer2){
//         if(pointer2.val > pointer1.val){
//             result.addAtTail(pointer1.val);
//             pointer1 = pointer1.next;
//         }else{
//             result.addAtTail(pointer2.val);
//             pointer2 = pointer2.next;
//         }
//     }

//     while(pointer1){
//         result.addAtTail(pointer1.val);
//         pointer1 = pointer1.next;
//     }

//     while(pointer2){
//         result.addAtTail(pointer2.val);
//         pointer2 = pointer2.next;
//     }

//     return result;
// }


//no extar space
const myFunction = (ll1, ll2) =>{
    let result = new LinkedList();

    let pointer1 = ll1.head;
    let pointer2 = ll2.head;

    let temp;

    while(pointer1 && pointer2){
        if(pointer2.val > pointer1.val){
            if(!temp){
                result.head = temp = pointer1;
            }else{
                temp.next = pointer1;
                temp = temp.next;
            }
            pointer1 = pointer1.next;
        }else{
            if(!temp){
                result.head = temp = pointer2;
            }else{
                temp.next = pointer2;
                temp = temp.next;
            }   
            pointer2 = pointer2.next;
        }
    }

    while(pointer1){ 
        if(!temp){
            result.head = temp = pointer1;
        }else{
            temp.next = pointer1;
            temp = temp.next;
        }
        pointer1 = pointer1.next;
    }

    while(pointer2){
        if(!temp){
            result.head = temp = pointer2;
        }else{
            temp.next = pointer2;
            temp = temp.next;
        }
        pointer2 = pointer2.next;
    }

    return result;
}

module.exports = myFunction;