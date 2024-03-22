type LinkedList = {
  head?: LinkedListNode;
  tail?: LinkedListNode;
}

type LinkedListValue = any;

type LinkedListNode = {
  value: LinkedListValue;
  next?: LinkedListNode;
}

export type { LinkedList, LinkedListNode, LinkedListValue };
