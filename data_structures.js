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

    removeHead() {
      const removedHead = this.head;
      if (!removedHead) {
        return;
      }
      this.head = removedHead.getNextNode();
      return removedHead.data;
    }
  
    printList() {
      let currentNode = this.head;
      let output = '<head> ';
      while(currentNode !== null) {
        output += currentNode.data + ' ';
        currentNode = currentNode.getNextNode();
      }
      output = output + '<tail>';
      console.log(output);
    }

    findNodeRecursively(data, currentNode = this.head) {
      if (currentNode === null) {
        return null;
      } else if (currentNode.data === data) {
        return currentNode;
      } else {
        return this.findNodeRecursively(data, currentNode.next);
      }
    }
}  

// DOUBLY LINKED LIST
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }
  
  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
  }
  
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }
  
  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.data;
  }
  
  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }
    if (this.head === nodeToRemove) {
      this.removeHead();
    }
    else if(this.tail === nodeToRemove) {
      this.removeTail();
    }
    else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  }
  
  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class')
    }
  }

  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node;
    } else {
      throw new Error('Previous node must be a member of the Node class')
    }
  }

  getNextNode() {
    return this.next;
  }

  getPreviousNode() {
    return this.previous;
  }
}

// Swapping elements in a linked list
function swapNodes(list, data1, data2) {
  if (data1 === data2) {
    console.log('Elements are the same - no swap needed.');
    return;
  }

  let node1 = list.head;
  let node2 = list.head;
  let node1Prev = null;
  let node2Prev = null;
 
  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }

  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }

  if (node1 === null || node2 === null) {
    console.log('Swap not possible - one or more element is not in the list');
    return;
  }

  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }

  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp); 
}

// finds nth last element in a singly linked list
const nthLastNode = ( linkedList, n) => {
  nthLastNodePointer = null;
  count = 0;
  tailPointer = linkedList.head;

  while(tailPointer) {
    tailPointer = tailPointer.getNextNode();
    if (count >= n) {
      if (!nthLastNodePointer) {nthLastNodePointer = linkedList.head}
      nthLastNodePointer = nthLastNodePointer.getNextNode();
    }
    count += 1;
  }
  return nthLastNodePointer;
};

// finds the middle node in a single linked list
const findMiddle = linkedList => {
  let slowPointer = linkedList.head;
  let fastPointer = linkedList.head;

  while(fastPointer) {
    fastPointer = fastPointer.next;
    if (fastPointer) {
      fastPointer = fastPointer.next;
      slowPointer = slowPointer.next;
    }
  }
  return slowPointer;
};

// QUEUE
class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    if (this.hasRoom()) {
          this.queue.addToTail(data);
          this.size++;
          console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    } 
    else{
      throw Error('Queue is full!');
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
      return data;
    } 
    else {
      throw new Error("Queue is empty!");
    }
  }
}

// STACK
class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    }
    else {
      throw Error('Stack is full');
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    }
    else {
      console.log('Stack is empty!');
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } 
    else {
      return null;
    }
  }
}

// Hash map
class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size);
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];

    if (linkedList.head === null) {
      linkedList.addToHead({ key, value });
      return;
    }
    let current = linkedList.head;
    while (current) {
      if (current.data.key === key) {
        current.data = { key, value };
      }
      if (!current.next) {
        current.next = new Node({ key, value });
        break;
      }
      current = current.next;
    }
  }

  retrieve(key) {
    const arrayIndex = this.hash(key);
    let current = this.hashmap[arrayIndex].head;
    while (current) {
      if (current.data.key === key) {
        return current.data.value;
      }
      current = current.next;
    }
    return null;
  }
}

// BinaryTree
class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinaryTree(value, this.depth + 1);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTree(value, this.depth + 1);
      } else {
        this.right.insert(value);
      }
    }
  }
  
  getNodeByValue(value) {
    if (this.value === value) {
      return this;
    } else if ((this.left) && (value < this.value)) {
        return this.left.getNodeByValue(value);
    } else if (this.right) {
        return this.right.getNodeByValue(value);
    } else {
      return null;
    }
  }

  depthFirstTraversal() {
    if (this.left) {
      this.left.depthFirstTraversal();
    }
    console.log(`Depth=${this.depth}, Value=${this.value}`);
    if (this.right) {
      this.right.depthFirstTraversal();
    }
  }

};

// MinHeap
class MinHeap {
  constructor() {
    this.heap = [ null ];
    this.size = 0;
  }

  popMin() {
    if (this.size === 0) {
      return null 
    }
    const min = this.heap[1];
    this.heap[1] = this.heap[this.size];
    this.heap.pop();
    this.size--;
    this.heapify();
    return min;
  }

  add(value) {
    this.heap.push(value);
    this.size++;
    this.bubbleUp();
  }

  bubbleUp() {
    let current = this.size;
    let swapCount = 0;
    while (current > 1 && this.heap[getParent(current)] > this.heap[current]) {
      this.swap(current, getParent(current));
      current = getParent(current);
      swapCount++;
    }
    if (this.size == 10000) {
      console.log(`Heap of ${this.size} elements restored with ${swapCount} swaps`);
    }
  }

  heapify() {
    let current = 1;
    let leftChild = getLeft(current);
    let rightChild = getRight(current);
    let swapCount = 0;

    while (this.canSwap(current, leftChild, rightChild)) {
      // Only compare left & right if they both exist
      if (this.exists(leftChild) && this.exists(rightChild)) {

        // Make sure to swap with the smaller of the two children
        if (this.heap[leftChild] < this.heap[rightChild]) {
            this.swap(current, leftChild);
            current = leftChild;
            swapCount++;
        } else {
            this.swap(current, rightChild);
            current = rightChild;
            swapCount++;
        }
      } else {
        // If only one child exist, always swap with the left
        this.swap(current, leftChild);
        current = leftChild;
	      swapCount++;
      }
      leftChild = getLeft(current);
      rightChild = getRight(current);

    }
    if (this.size == 9999) {
      console.log(`Heap of ${this.size} elements restored with ${swapCount} swaps`);
    }
  }

  exists(index) {
    return index <= this.size;
  }

  canSwap(current, leftChild, rightChild) {
    // Check that one of the possible swap conditions exists
    return (
      this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
      || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
    );
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

}

const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;

// Graph
class Graph {
  constructor(isWeighted = false, isDirected = false) {
    this.vertices = [];
    this.isWeighted = isWeighted;
    this.isDirected = isDirected;
  }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter(v => v !== vertex);
  }

  addEdge(vertexOne, vertexTwo, weight) {
    const edgeWeight = this.isWeighted ? weight : null;

    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo, edgeWeight);

      if (!this.isDirected) {
        vertexTwo.addEdge(vertexOne, edgeWeight);
      }
    } else {
      throw new Error('Expected Vertex arguments.');
    }
  }

  removeEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);

      if (!this.isDirected) {
        vertexTwo.removeEdge(vertexOne);
      }
    } else {
      throw new Error('Expected Vertex arguments.');
    }
  }

  print() {
    this.vertices.forEach(vertex => vertex.print());
  }
}

class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }

  addEdge(vertex, weight) {
    if (vertex instanceof Vertex) {
      this.edges.push(new Edge(this, vertex, weight));
    } else {
      throw new Error('Edge start and end must both be Vertex');
    }
  }

  removeEdge(vertex) {
    this.edges = this.edges.filter(edge => edge.end !== vertex);
  }

  print() {
    const edgeList = this.edges.map(edge =>
        edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data);

    const output = `${this.data} --> ${edgeList.join(', ')}`;
    console.log(output);
  }
}

class Edge {
  constructor(start, end, weight = null) {
    this.start = start;
    this.end = end;
    this.weight = weight;
  }
}

  // => depthFirstTraversal

  const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
    callback(start);
  
    start.edges.forEach((edge) => {
      const neighbor = edge.end;
  
      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor);
        depthFirstTraversal(neighbor, callback, visitedVertices);
      }
    });
  };