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

console.log(sumZero([28, 43, -12, 30, 4, 0, 12]))

//Runtime complexity: 