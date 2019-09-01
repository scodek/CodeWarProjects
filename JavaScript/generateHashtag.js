/*Problem Description :
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

Examples :
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

//solution : usage of 'map' function

function generateHashtag (str) {
let retVal = '';
if(str.trim().length === 0){
  retVal = false;
}else{
	let res = '#' + str.trim().split(' ').map((eachWord) =>(eachWord.substring(0,1).toUpperCase() + eachWord.substring(1))).join('');
retVal = res.length > 140 ? false : res;
}

return retVal;
}
