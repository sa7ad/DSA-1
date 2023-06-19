class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  //O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  //O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next=prev.next
      prev.next=node
      this.size++;
    }
  }
  removeFrom(index){
     if(index<0 || index>=this.size){
      return null
     }
     let removeNode;
     if(index===0){
      removeNode=this.head;
      this.head=this.head.next;
     }else{
      let prev=this.head
      for(let i=0;i<index-1;i++){
        prev=prev.next
      }
      removeNode=prev.next
      prev.next=removeNode.next
     }
     this.size--
     return removeNode.value
  }
  search(value){
    if(this.isEmpty()){
      return -1;
    }
    let i=0;
    let curr=this.head;
    while(curr){
     if(curr.value===value){
      return i;
     }
     curr=curr.next;
     i++;
    }
    return -1;
  }
  reverse(){
    let prev=null
    let curr=this.head
    while(curr!=null){
      let next=curr.next
      curr.next=prev
      prev=curr
      curr=next
    }
    this.head=prev
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value}`;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}
const list = new LinkedList();
list.insert(1,0)
list.insert(2,1)
list.insert(3,2)
list.reverse()
list.print()

