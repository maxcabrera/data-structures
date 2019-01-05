class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

/**
 * Time complexity for LinkedList
 *
 * Insertion: O(1)
 * Removal: It depends... From the beginning O(1) or O(N)
 * Searching: O(N)
 * Access: O(N)
 *
 * - Singly Linked Lists are an excellent alternative to arrays when
 * insertion and deletion at the beginning are frequently required.
 * - There is not built in index to access the data
 * - The idea of a list data structure that consist of nodes is the
 * foundation for other data structures like Stacks and Queues.
 *
 */


class LinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  /**
   * Adding a node to the end of the linked list
   * @param value
   * @returns {LinkedList}
   * Time Complexity O(1)
   */
  push(value){
    const newTail = new Node(value)
    if(!this.head) {
      this.head = newTail
      this.tail = this.head
    } else {
      this.tail.next = newTail
      this.tail = newTail
    }
    this.length++
    return this
  }

  /**
   * Removing a node from the end
   * of the list
   * @param none
   * @returns {LinkedList}
   * Time Complexity O(N)
   */
  pop(){
    if(!this.head) return undefined
    if(this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0
      return this
    } else {
      let currentNode = this.head
      let newTail = currentNode
      while (currentNode.next) {
        newTail = currentNode
        currentNode = currentNode.next
      }
      this.tail = newTail
      this.tail.next = null
      this.length--
      return this
    }
  }


  /**
   * shift() Removes a node from the
   * beginning of the list, return the node removed
   * @params none
   * @returns {Node}
   * Time complexity O(1)
   */
  shift() {
    if(!this.head) return undefined
    const oldHead = this.head
    this.head = oldHead.next
    this.length--
    if(this.length === 0) {
      this.tail = null
    }
    return oldHead
  }

  /**
   * unshift: Adds a new node to the
   * beginning of the linked list
   * @param value
   * Time Complexity O(1)
   */
  unshift(value) {
    const newHead = new Node(value)
    if(!this.head){
      this.head = newHead
      this.tail = this.head
    } else {
      newHead.next = this.head
      this.head = newHead
    }
    this.length++
    return this
  }

  /**
   * get: retrieves a node by its position in the
   * linked list
   * @param position
   * Time complexity O(N)
   */
  get(position) {
    if(position >= this.length || position < 0) return null

    let indexCount = 0
    let currentNode = this.head
    while(indexCount !== position) {
      currentNode = currentNode.next
      indexCount++
    }
    return currentNode
  }

  /**
   * set: Changes the value of a node based on its position
   * on the linked list.
   * It received an index and a value
   * @params index, newValue
   * @returns {SinglyLinkedList}
   */
  set(index, value){
    const nodeFound = this.get(index)
    if(!nodeFound) return false

    nodeFound.value = value
    return true
  }


  /**
   * insert: adds a new node in the specified position
   * @param index
   * @param val
   * Time Complexity O(N)
   */
  insert(index, val) {
    if(index < 0 || index > this.length) return false
    if(index === 0) {
      this.unshift(val)
      return true
    } else if(index === this.length) {
      this.push(val)
      return true
    } else {
      const newNode = new Node(val)
      const prevNode = this.get(index-1)
      newNode.next = prevNode.next
      prevNode.next = newNode
      this.length++
      return true
    }
  }

  /**
   * remove: deletes a node from the list,
   * based on its position
   */
  remove(index) {
    if(index < 0 || index >= this.length) return undefined
    if(index === this.length - 1) return !!this.pop()
    if(index === 0) return !!this.shift()

    const prevNode = this.get(index-1)
    const removed = prevNode.next
    prevNode.next = removed.next
    this.length--
    return removed

  }

  /**
   * reverse: reverses the linked list
   * example:
   *  {1->2->3->4} ==>> {1<-2<-3<-4}
   *
   *  Time complexity O(N)
   */
  reverse() {
    if(!this.head) return null

    let currentNode = this.head
    this.head = this.tail
    this.tail = currentNode

    let nextNode = null
    let savedNode = null

    for(let i = 0; i < this.length; i++) {
      nextNode = currentNode.next
      currentNode.next = savedNode
      savedNode = currentNode
      currentNode = nextNode
    }
    return this
  }
}

export default LinkedList