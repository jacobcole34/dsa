const linkedListValues = (head) => {
  // todo
  const myValues = [];
  let current = head;
  
  while(current !== null){
    myValues.push(current.val);
    current = current.next;
  }
  
  return myValues;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const sumList = (head) => {
  // todo
  let sum = 0;
  let current = head;
  
  while(current !== null){
    sum += current.val;
    current = current.next;
  }
  
  return sum;
  
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListFind = (head, target) => {
  // todo
  let current = head;
  while(current !== null){
    if(current.val === target)return true;
    current = current.next;
  }  
  return false;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getNodeValue = (head, index) => {
  // todo
  let count = 0;
  let current = head;
  while(current !== null){
    if(count === index)return current.val;
    count++;
    current = current.next;
  }
  return null;
  
  
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reverseList = (head) => {
  // todo
  let prev = null;
  let current = head;
  while(current !== null){
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
