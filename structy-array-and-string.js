// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = (s) => {
  // todo
  
  let myString = '';
  let p1 = 0; // starting
  let p2 = 0; // ending, exclusive
  let numbers = [0,1,2,3,4,5,6,7,8,9];
  let num = '';

  while(p2 < s.length){
    if(numbers.includes(Number(s[p2]))){
      p2++;
    }
    else{
      num = Number(s.slice(p1,p2));
      myString += s[p2].repeat(num);
      p2++;
      p1 = p2;
    }
  }
  return myString;
};

// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

const compress = (s) => {
  // todo
  
  let myString = '';
  count = 1;
  
  for(let i = 0; i < s.length; i++){
    if(s[i] !== s[i+1]){
      if(count === 1){
        myString += s[i];
        count = 1;
      }
      else {
        myString += count + s[i];
        count = 1;
      }
    }
    else{
      count++;
    }
  }
    
  
  return myString;
  
};

// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {
  // todo
  
  if(s1.length !== s2.length)return false;
  
  const cache1 = {};
  const cache2 = {};
  
  for(let i = 0; i < s1.length; i++){
    if(!cache1[s1[i]]) cache1[s1[i]] = 1;
    else cache1[s1[i]] += 1;
  }
  
  for(let i = 0; i < s2.length; i++){
    if(!cache2[s2[i]]) cache2[s2[i]] = 1;
    else cache2[s2[i]] += 1;
  }
  
  for(const el in cache1){
    if(cache1[el] !== cache2[el])return false;
  }
  
  return true;
  
};

// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (s) => {
  // todo
  
  const cache = {};
  let highCount = 0;
  let match = [];
  
  //  iterate over string, creating cache object
  //  iterate over cache, setting highest count #, add value to array
  //  iterate over string, return char that matches array
  
  for (let i = 0; i < s.length; i++){
    if(!cache[s[i]]){
      cache[s[i]] = 1;
    }
    else cache[s[i]] += 1;
  }
  
  for(const [key, value] of Object.entries(cache)){
    if(value >= highCount){
      highCount = value;
    }
  }
  
  for(const [key, value] of Object.entries(cache)){
  if(value === highCount){
      match.push(key);
    }
  }
  
  for (let i = 0; i < s.length; i++){
    if(match.includes(s[i]))return s[i];
  }
  
};

const pairSum = (numbers, targetSum) => {
  // todo
  const cache = {};
  
  for(let i = 0; i < numbers.length; i++){
    
    const complement = targetSum - numbers[i];
    
    if(cache[complement] !== undefined && complement !== i){
      return [cache[complement], i]
    };
    cache[numbers[i]] = i;
  }
};

const pairProduct = (numbers, targetProduct) => {
  // todo
  const cache = {};
  
  for(let i = 0; i < numbers.length; i++){
    // Divide targetProduct by number[i]
    const complement = targetProduct/numbers[i];
    cache[numbers[i]] = i;
    if(cache[complement] !== undefined && cache[complement] !== i){
      return [cache[complement], i];
    }

    console.log(cache);
  }
  
};

const intersection = (a, b) => {
  // todo
  const cache = {};
  const myArray = [];
  
  a.forEach( el => {
    cache[el] = 1;
  })
  
  b.forEach( el => {
    if(cache[el] !== undefined)myArray.push(el);
  });
            
  return myArray;

};

const fiveSort = (nums) => {
  // todo
  let p1 = 0;
  let p2 = nums.length - 1;
  let swap;
  
  while(p1 < p2){
    if(nums[p2] === 5){
      p2--;
    }
    else if(nums[p1] === 5 && nums[p2] !== 5){
      swap = nums[p2];
      nums[p2] = nums[p1];
      nums[p1] = swap;
    }
    else p1++;
  }
  return nums;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

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
