/*
Problem description:
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

*/

//Solution: using 'forEach' function

function createPhoneNumber(numbers){
  
  let finalStr = '(';
	numbers.forEach((num,index) => {
        finalStr += num;
        if(index === 2){
        	finalStr += ') ';
        }else if(index === 5){
        	finalStr += '-';
        }
        
	});

	return finalStr;

}

//Solution : using 'reduce' function
function createPhoneNumber(numbers){
    let count = 0;
	return numbers.reduce((acc,curVal) =>{
      acc += curVal;
      count++;
      if(count === 3){
      	acc += ') ';
      }else if(count === 6){
      	acc += '-';
      }

      return acc;

	},'(');

}
