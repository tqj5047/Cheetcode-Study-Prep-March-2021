## Pattern 7:
### Reverse a LinkedList:
```Javascript
class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
};
const reverse = function(head) {
  // TODO: Write your code here
  let previous = null
  let cur = head
  while(cur){
    let nextone = cur.next
    cur.next = previous
    previous = cur
    cur = nextone
  }
  return previous;
};
```
## Reverse a Sub-list
```Javascript
class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
};
```
