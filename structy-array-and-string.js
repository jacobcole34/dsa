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

