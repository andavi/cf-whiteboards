'use strict';

const Node = require('./node');

// Variables
  // HEAD
// Behavior
  // Insert Values -> :)
  // Remove Values
  // Iterate / Loop -> :)
class LinkedList{
  constructor(){
    this.head = null;
  }

  insertAtHead(value){
    const newNode = new Node(value);
    // 1 - Connecting newNode to our list
    newNode.next = this.head;

    // 2 - re-assigning our HEAD
    this.head = newNode;
  }

  insertAtTail(value){
    const newNode = new Node(value);

    if(!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while(current.next) { // Vinicio - WHILE I CAN MOVE CURRENT TO THE RIGHT
      current = current.next;
    }
    // Vinicio - once this while is over. I know I'm at the end
    // current.next is equal to null right now
    // this is making the new connection
    current.next = newNode;
  }

  // Vinicio - I'm teaching find, mainly to teach you how to loop
  find(value) {
    if(!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }
    if(this.head.value === value) {
      return this.head;
    }

    // Vinicio - let's loop over the linked list
    let current = this.head;
    while(current.next) {
      //------------------------------------------------------
      // Vinicio - While I'm looping I want to check if I find the
      // value I'm looking for
      if(current.next.value === value) {
        return current.next;
      }
      //------------------------------------------------------
      current = current.next;
    }
    // Vinicio - if I got to this point, I didn't find anything
    return null;
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
    }
    while(current.next) {
      if (current.next.value === value) {
        const tmp = current.next;
        current = newNode;
        newNode.next = tmp;
      }
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    while(current.next) {
      if (current.value === value) {
        const tmp = current.next;
        current.net = newNode;
        newNode.next = tmp;
      }
    }
  }
}

module.exports = LinkedList;