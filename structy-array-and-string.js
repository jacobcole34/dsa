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
