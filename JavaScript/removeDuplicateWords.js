/*
Problem :

Task is to remove all duplicate words from a string, leaving only single (first) words entries.
Example:
Input: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
Output: 'alpha beta gamma delta'
*/

//solution

function removeDuplicateWords (s) {
 return Array.from(s.split(' ').reduce((resSet,word) => {
  
    if(!resSet.has(word)){
       resSet.add(word);
    }
    
    return resSet;
  
  },new Set())).join(' ');
 }
