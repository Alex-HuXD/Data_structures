class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(){
      this.head = null;
      this.tail = this.head;
      this.length = 0;
    }
  
    printList(){                                  //<-- this is a helper function, it prints current list
      let currentList="";
      let currentNode = this.head;
      while(currentNode){
        currentList += currentNode.value + '->';
        currentNode=currentNode.next;  
      }
      currentList+='null';
      console.log('current list: ' + currentList);
    }
  
    append(value){                            //<--add to the end of the list;
      const newNode = new Node(value);
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        return this;
      }else {
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
      }
    }
     
    prepend(value) {                          //<--add to the start of the list;
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  
    insert(index,value){                    //<-- insert at the given index;
      if(index>=this.length) {
        this.append(value);
        return this;
      }  
      const newNode = new Node(value);
      let count = index-1; // first node in LinkedList is the head node.
      let currentNode = this.head;
      while(count>0){
        currentNode = currentNode.next;
        count--;
      }
      if(currentNode===this.tail){
        this.append(value);
      }else {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        return this
      }
    }
  
    popEnd(){                                        // <--- delete  the last Node;
      let currentNode = this.head;
      while(currentNode.next.next!==null){
        currentNode = currentNode.next;
      }
      this.tail = currentNode;
      currentNode.next = null;
      this.length--;
      return this;
    }
  
    shift() {                                     //<--- delete the first Node;
      let currentNode = this.head.next;
      this.head = currentNode
      this.length--;
      return this;
    }
   
    remove(index){                               //<--- delete the Node at given Index;
      if(index>this.length){
        console.log('out of range');
        return
      }
      if(index === this.length){
        this.popEnd();
      } else {
        let count = index - 2 ;
        let currentNode = this.head;
        if(count<0){
          this.shift();
        }else {
          while(count>0) {
            currentNode = currentNode.next;
            count--;
          }
          currentNode.next = currentNode.next.next;
          this.length--;
          return this;
        }  
      }   
    }
  
    lookUp(index){                                //<=== check the Node at given index;
      if(index>this.length){
        console.log('out of range')
        return;
      }else{
        let count=index-1;
        let currentTarget = this.head;
  
        while(count>0){
          currentTarget = currentTarget.next;
          count--;
        }
        console.log(`index ${index}'s value is ${currentTarget.value}`);
        return;
      }
    }
  
  }
  
  
  
  
  let myLinkedList = new LinkedList;
  

  // test cases 
  myLinkedList.append(1);
  myLinkedList.append(2);
  myLinkedList.append(3);
  myLinkedList.append(24);
  myLinkedList.prepend(9);


  myLinkedList.insert(2,8);
 


  myLinkedList.popEnd()

  
  myLinkedList.remove(7);
  

  
  
  myLinkedList.printList();
  myLinkedList.lookUp(6);
