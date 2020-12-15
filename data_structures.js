// NODE
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
  
    getNextNode() {
      return this.next;
    }
}

// LINKED LIST
class LinkedList {
  
    constructor() {
      this.head = null;
    }
  
    addToHead(data) {
      const newHead = new Node(data);
      const currentHead = this.head;
      this.head = newHead;
      if (currentHead) {
        this.head.setNextNode(currentHead);
      }
    }
  
    addToTail(data) {
      let tail = this.head;
      if (!tail) {
        this.head = new Node(data);
      } else {
        while (tail.getNextNode() !== null) {
          tail = tail.getNextNode();
        }
        tail.setNextNode(new Node(data));
      }
    }
}  