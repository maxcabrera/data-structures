# Singly Linked list in JavaScript
Linked List is a sequence of nodes, where each node links to the next node and then to the next node and so on,  then the last node links to null.

## Highlights
- The first node in the list is called Head
- The last node in the list is called Tail
- The head and the tail are the same when there is only one node in the list
- There is no index, like in the arrays. So no random access is allowed. To access an node we need to start from the head and follow the links to the next nodes until we find the one we want.
- List contain a length property to know how many nodes are in it.
- They can hold any type of data, like strings, numbers, objects.
- Data in the list can be sorted or unsorted
- Data can hold unique or duplicate values

## Downside
Each node contains a pointer field to at least one other node (here next ).This means that much of the space used in linked data structures has to be devoted to pointers, not data.

## Why is it important to understand Linked Lists
Linked List and its variations are used as underlying data structure to implement List, Stack, Queue, and Deque ADTs

## Methods
- Push: Adds a node to the end of the list
- Pop: Removes a node from the end of the list
- Shift: Removes a node from the beginning of the list
- Unshift: Adds a node at the beginning of the list
- Get: Retrieves a node by its position in the list
- Set: Changes the value of a node based on its position on the list
- Insert: Adds a new node in the specified position
- Remove: Removes a node from the list, based on its position
- Reverse: Reverses the order of the list

## Time complexity for LinkedList
- Insertion: O(1)
- Removal: It depends... From the beginning O(1) or O(N)
- Searching: O(N)
- Access: O(N)

## Real life application
Developing a game of cards we want to have a way to have all cards linked when they are in the deck. We would be able to shift()  to get the next  card on top of the pile and push() any new card to the bottom once is used.

## Summary
Singly Linked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required.
The idea of a list data structure that consist of nodes is the foundation for other data structures like Stacks and Queues.
