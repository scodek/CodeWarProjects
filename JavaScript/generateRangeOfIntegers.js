/*Problem description
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, 
the second is the maximum of the range and the third is the step. (min < max)

Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)
*/

//Solution
const generateRange = (min, max, step) => {
  let res = [];
  while(min <= max) {
    res.push(min);
    min += step;
  }
  return res;
}

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
