# Data

## Algorithmic complexity / Big-O / Asymptotic analysis
- Time: log n > 2 ye bol, kalani 2 ye bol, etc
- Space: amount of memory

## Sorting
- selection
- insertion
- heapsort
- quicksort
- merge sort

## Data structures
- Map vs dictionary: unorg vs organized with indexes (key/val at index) see hashmap
- Array
- Set
- Multiset (bag)
- Tuple
- Multimap/associated array
- [Linked List](#linked-list)
- [Stack](#stack)
- [Hash table/hashing](#hash-tablehashing)
- [Graph](#graph)
- [Tree](#tree)

### Linked List

- Time Complexity: Access: O(n) Search: O(n) Insert: O(1)	Remove: O(1)
- Types:
  - normal: lineer collection of elements (called node), each pointing to next item via pointer
  - singly-linked list: each node points to next node, last node points to null
  - doubly-linked list: 2 pointers, p (prev node) and n (next node)
  - circular-linked list: =singly, but last node points to first

### Stack
- Time Complexity: Access: O(n) Search: O(n) Insert: O(1)	Remove: O(1)
- LIFO
- collection of elements with 2 main ops: push (put it to end) and pop (get&remove from end)

### Queue
- collection of elements with 2 main ops: enqueue (put it to end) and dequeue (get&remove from start)
- FIFO
- Time Complexity: Access: O(n) Search: O(n) Insert: O(1)	Remove: O(1)

### Hash table/hashing
```
fixed size data
key
values returned = hash value, hash code, hash
if 1 value has 2 keys = collision
hash map: name of the mapping structure
```

### Graph
```
- ?:
directed
undirected
adjacency matrix
adjacency list
traversals: BFS, DFS
```

### Tree

#### Binary Tree
```
-each node has max 2 children (left child,right child)
full tree; each node has 2 or 0 children
perfect binary tree: full tree + each has same depth
complete tree: every level except possibly the last is full, last level nodes are left
```
#### Binary Search Tree-BST
```
type of binary tree
in a row (debbth) left nodes are always <= righter
Access: O(log(n)),Search: O(log(n)),Insert: O(log(n)),Remove: O(log(n))
```

#### Trie
```
aka radix tree, prefix tree
search tree for strings, with associations (alfabe) (https://github.com/kdn251/interviews#trie)
-Fenwick Tree
-Segment Tree
-Heap (Priority Queue / Binary Heap)
```
