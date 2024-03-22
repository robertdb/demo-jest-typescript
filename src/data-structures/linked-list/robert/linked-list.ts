import { LinkedList, LinkedListNode, LinkedListValue } from "./linked-list-types";




const linkedList = () => {

  const list: LinkedList = {};

  const getArrayList = (list: LinkedList ) => {
    if(!list.head) {
      return []
    }
  
    let node: LinkedListNode | undefined = list.head;
    const arrayList = [];
  
    while(!!node) {
      arrayList.push(node?.value);
      node = node.next;
    }

    return arrayList;
  }

  const getLinkedListHead = () => {
    return undefined;
  }
  
  const getLinkedListTail = () => {
    return undefined;
  }
  
  const append = (value: LinkedListValue, list: LinkedList): void => {
    const newNode: LinkedListNode = {
      value,
    }

    if(!list.tail){
      list.head = newNode;
      list.tail = newNode;
      return;
    }

    const oldTail =  list.tail;
    oldTail.next = newNode;
    list.tail = newNode;
   
  }
  
  const preAppend = (value: LinkedListValue, list: LinkedList): void => {
    const newNode: LinkedListNode = {
      value,
    }

    if(!list.tail){
      list.head = newNode;
      list.tail = newNode;
      return;
    }

    const oldHead = list.head;
    list.head = newNode;
    newNode.next = oldHead;
   
  }

  const deleteByValue = (value: LinkedListValue, list: LinkedList): void => {
    // const newNode: LinkedListNode = {
    //   value,
    // }

    // if(!list.tail){
    //   list.head = newNode;
    //   list.tail = newNode;
    //   return;
    // }

    // const oldHead = list.head;
    // list.head = newNode;
    // newNode.next = oldHead;
   
  }

  return {
    getHead: getLinkedListHead,
    getTail: getLinkedListTail,
    getList: (): LinkedListValue[] => getArrayList(list),
    append: (value: LinkedListValue): void => { void append(value, list) },
    preAppend: (value: LinkedListValue): void => { void preAppend(value, list) },
    delete: (value: LinkedListValue): void => { void deleteByValue(value, list) },
  }
  
}


export default linkedList;