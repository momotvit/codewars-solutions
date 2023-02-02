// Complete the solution so that it splits the string into
// pairs of two characters.If the string contains an odd number
// of characters then it should replace the missing second character
// of the final pair with an underscore('_').

// Examples:

// * 'abc' => ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


// ///////my solution 

function solution(str) {
var string = str;
const strToArr = string.match(/.{1,2}/g);
if (str === "") {
return [];
}

for (let index = 0; index < strToArr.length; index++) {
let elOfArr = strToArr[index];
if ( elOfArr.length < 2) {
strToArr.pop(elOfArr);
elOfArr = elOfArr + "_";
strToArr.push(elOfArr);

}
}
return strToArr;
}


////solution from codewars


// function solution(str) {
// str.length % 2 && (str += "_");
// return str.match(/.{1,2}/g) || [];
// }

/////////

// function solution(s){
// return (s+"_").match(/.{2}/g)||[]
// }
// console.log(solution("abcdefj")); // ['ab', 'cd', 'ef', 'j_']
// console.log(solution("")); // []
// console.log(solution("Complete the solution so that it splits the string"));


///////////////////////////////////////////////////


// You probably know the "like" system from Facebook and
// other pages.People can "like" blog posts, pictures or
// other items.We want to create the text that should be
// displayed next to such an item.

// Implement the function which takes an array containing
//  the names of people that like an item.It must return the
//  display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


// my solution

// function likes(names) {
//   for (let index = 0; index < names.length; index++) {
  
//     if (names.length === 1) {
//       return `${names[0]} likes this`
//     }
//     else if (names.length === 2) {
//       return `${names[0]} and ${names[1]} like this`
//     }
//     else if (names.length === 3) {
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     }
//     else if (names.length >= 4) {
//        return `${names[0]}, ${names[1]} and ${names.slice(2).length} others like this`
//     }
//   }
//   return `no one likes this`
  
// }


// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
// console.log(likes(["Alex", "Jacob", "Mark"]));
// console.log(likes(["Alex", "Jacob"]));

// console.log(likes([]))


///solution from codewars

// function likes(names) {
//   names = names || [];
//   switch(names.length){
//     case 0: return 'no one likes this'; break;
//     case 1: return names[0] + ' likes this'; break;
//     case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//     case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//     default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//   }
// }


// function likes(names) {
//   names = names || [];
//   switch(names.length){
//     case 0: return 'no one likes this'; break;
//     case 1: return names[0] + ' likes this'; break;
//     case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//     case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//     default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//   }
// }


function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}



////////////////////////////////////////

// Write a function that accepts an array of
// 10 integers(between 0 and 9), that returns
//  a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!


function createPhoneNumber(numbers) {
    if (numbers.length < 10 && numbers.length > 1 ) {
        return `Sorry number is to short. Please check it.` 
    }
    else if (numbers.length === 0) {
        return `Please enter the number before submiting.`
    }
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`; 
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(createPhoneNumber([]));


///solutios from codewars

// function createPhoneNumber(numbers){
//   numbers = numbers.join('');
//   return '(' + numbers.substring(0, 3) + ') '
//       + numbers.substring(3, 6)
//       + '-'
//       + numbers.substring(6);
// }


// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
  
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
  
//   return format;
// }


/////////////////////////////////////////////////



