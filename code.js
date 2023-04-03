//1) Sum Zero

// We want each number taken and added to each of the other numbers in the loop if any equal zero, return true, and false otherwise. This can be accomplished with a nested for loop.
let answer = false;

function sumZero (arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                answer = true;
            };
        };
    };
    return answer
};

// console.log(sumZero([28, 43, -12, 30, 4, 0, 12]))

//Runtime complexity: O(n^2)

//2) Unique Characters

//We can take the string and change it to lowercase, then loop the characters and check to see if they match any other characters. If they do, we'll return false. If not, true.
let unique = true
function uniqueChar(str){
    let lowerStr = str.toLowerCase();
    for (let i = 0; i < lowerStr.length; i++){
        let curChar = lowerStr[i];
        for(let j = 0; j < lowerStr.length; j++){
            let compareChar = str[j];
            if(i !== j && compareChar === curChar) {
                unique = false
            };
        };
    };
    return unique
};

// console.log(uniqueChar("Momday"));

//Runtime complexity: O(n^2)

//3) Pangram Sentence
// For this, I will make an object of all 26 letters. I'll take the string and increment each letter by what it matches. If every object is >= 1, than it's true. If not, it's false.

function pangramSentance(str) {
    let strArr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      };
    };
    return true;
}

// console.log(pangramSentance("qwertyuiopasdfghjklzxcv,b.n m"))

//Runtime complexity: O(n)

//4) Longest Word

function LongestWord(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    };
  };
  return arr.reduce((a, b) => a.length < b.length ? b : a, "");
}

// console.log(LongestWord(['boop', 'bloomburg', 'hello']));

//Runtime complexity: O(n)