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

const zipperLists = (head1, head2) => {
  let current1 = head1;
  let current2 = head2;
  let temp1 = null;
  let temp2 = null;
  
  if (current1 === null) return head2;
  if (current2 === null) return head1;

  while(current1.next !== null && current2 !== null){
    temp1 = current1.next;
    temp2 = current2.next;

    current1.next = current2;
    current2.next = temp1;

    current1 = temp1;
    current2 = temp2;
  }

  // if nodes are remained in second list then attach them to the first list.
  if (current1.next === null && current2 !== null) {
    current1.next = current2;
  }

  return head1;

};
