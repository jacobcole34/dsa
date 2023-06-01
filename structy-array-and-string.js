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
