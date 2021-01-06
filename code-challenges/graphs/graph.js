'use strict';


//Implement your own Graph. 
//The graph should be represented as an adjacency list, and should include the following methods:

class Node{
  constructor(value){
    this.value = value;
  }
}

class Edge{
  constructor(node, weight = 0){
    this.node = node;
    this.weight = weight;
  }
}


class Stack{
  constructor(){
    this.items = [];
  }

  pop(){
    if (this.items.length == 0){
      return 'Underflow';
    }else{
      return this.items.pop();
    };
  }

  push(element){
    this.items.push(element);
  }

  peek(){
    return this.items[this.items.length - 1]
  }

  isEmpty(){
    return this.items.length === 0 
  }

}

class Graph{
  constructor(){
    this.adjacencyList = new Map();
  }

  addNode(node){
    this.adjacencyList.set(node, []);
  }

  addDirectedEdge(startNode, endNode){
    if (this.adjacencyList.has(startNode) && this.adjacencyList.has(endNode)) {
      const neighbors = this.adjacencyList.get(startNode);
      neighbors.push(new Edge(endNode));
    }
  }

  addUnDirectedEdge(startNode, endNode){
    this.addDirectedEdge(startNode, endNode);
    this.addDirectedEdge(endNode, startNode);
  }
  getNode(){
    
  }

  getNeighbors(vertex){
    return this.adjacencyList.get(vertex);
  }
  

  size(){
    console.log('write me')  
  }

  bft(startNode) {

    const queue = [];

    // Set is a hashmap that only stores unique keys, not their values
    const visitedNodes = new Set();

    queue.push(startNode);

    visitedNodes.add(startNode);

    // in a real queue, this would be while queue.peek()
    while (queue.length) {

      const currentVertex = queue.shift();
      const neighbors = this.adjacencyList.get(currentVertex);
      // neighbors.forEach( neighbor .... )
      // for(let i = 0; i < neighbors.length; i++ ) { }
      for (let neighbor of neighbors) {
        const neighborVertex = neighbor.vertex;
        if (visitedNodes.has(neighborVertex)) {
          continue;
        } else {
          visitedNodes.add(neighborVertex);
        }
        queue.push(neighborVertex);
      }
    }

    return visitedNodes;

  }

  // The difference? Stack vs Queue
  dft(startNode) {
    const stack = new Stack;

    // Set is a hashmap that only stores unique keys, not their values
    const visitedNodes = new Set();

    stack.push(startNode);

    visitedNodes.add(startNode);

    // in a real queue, this would be while queue.peek()
    while (stack.length) {

      const currentVertex = stack.pop();
      const neighbors = this.adjacencyList.get(currentVertex);
      // neighbors.forEach( neighbor .... )
      // for(let i = 0; i < neighbors.length; i++ ) { }
      for (let neighbor of neighbors) {
        const neighborVertex = neighbor.vertex;
        if (visitedNodes.has(neighborVertex)) {
          continue;
        } else {
          visitedNodes.add(neighborVertex);
        }
        stack.push(neighborVertex);
      }
    }

    return visitedNodes;
  }

}


const graph = new Graph();

const ten = new Node(10);
const two = new Node(2);
const six = new Node(6);
const seven = new Node(7);
const three = new Node(3);
const eight = new Node(8);
const nine = new Node(9);

graph.addNode(ten);
graph.addNode(two);
graph.addNode(six);
graph.addNode(seven);
graph.addNode(three);
graph.addNode(eight);
graph.addNode(nine);

graph.addUnDirectedEdge(ten, two);
graph.addUnDirectedEdge(ten, six);
graph.addUnDirectedEdge(ten, three);
graph.addUnDirectedEdge(six, seven);
graph.addUnDirectedEdge(six, eight);
graph.addUnDirectedEdge(three, eight);
graph.addUnDirectedEdge(seven, eight);
graph.addUnDirectedEdge(seven, nine);
graph.addUnDirectedEdge(two, seven);

console.log(graph);

console.log('****************************** BFTS')

console.log(graph.bft(ten));
console.log(graph.bft(seven));

console.log('****************************** DEEFTS')
console.log(graph.dft(ten));
console.log(graph.dft(seven));