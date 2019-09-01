/* Problem description 
Given the string representations of two integers, return the string representation of the sum of those integers.
For example: sumStrings('1','2') // => '3'
sumStrings('50095301248058391139327916261', '81055900096023504197206408605') // => 131151201344081895336534324866

Note : A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

This is a 4 kyu problem.
*/

function sumStrings(a,b) { 

if(a === ''){
 return b;
 
 }else if(b === ''){
  return a;
 }
 
  if(a.length > b.length){
 	b = '0'.repeat(a.length - b.length) + b;
 }else if(b.length > a.length){
 	a = '0'.repeat(b.length - a.length) + a;
 }
 
 
 let aArray = a.split('');
 let bArray = b.split('');
 let carry = 0;
 let str = [];
 
 let bIndex = bArray.length - 1 ;
 for(let i = aArray.length - 1; i >= 0;i--){
  sum = parseInt(aArray[i]) + parseInt(bArray[bIndex]) + carry;
  
 if(sum >= 10){
 carry = 1;
 }else{
 	carry = 0;
 }

if(sum.toString().length > 1){

	if(bIndex === 0){
		str.push(sum);
   }else{
   	str.push(sum.toString().substring(1));
   }
  
}else{
	str.push(sum.toString().substring(0));
}

bIndex--;
  
 }

return str.reverse().join('').replace(/^0+([0-9]+)$/,"$1");
 
}
