// TASK 1
// Make this work (repeat 3 times the contents of an array):
// repeat([1,2,3]); // [1,2,3,1,2,3,1,2,3]

const example = [1,2,3];

function repeat(array,times) {
    //copy the content and fill, then append to a new array, group together
    const result = [].concat(...Array(times).fill(array)); 
    return result;
} 

console.log(repeat(example,3));


// ===============================================================================

// Task 2
// Make this work (no vowels, lowercase except the first letter):
// reformat("liMeSHArp DeveLoper TEST") // Lmshrp dvlpr tst

const exampleText = 'liMeSHArp DeveLoper TEST';

function reformat(text){
    // Lowercase all character, then filter them with RegExp
    let result = text.toLowerCase().replace(/[aeiou]/g,"");

    // Take out the first letter then Uppercase it
    const CapitalLetter = result.charAt(0).toUpperCase();
    
    // combine the first letter and the rest of characters
    result = CapitalLetter+result.slice(1);
    return result;
}

console.log(reformat(exampleText));


// ===============================================================================

//Task 3 (optional, for bonus points):
// Make this work (without using any built in functions, only a for loop, return the next binary number in a string or as an array)

// next_binary_number([1,0]) // [1,1]

// possible test cases:
// [1,0] => [1,1]
// [1,1] => [1,0,0]
// [1,1,0] => [1,1,1]
// .......
// [1,0,0,0,0,0,0,0,0,1] => [1,0,0,0,0,0,0,0,1,0]


const exampleNum = [1,1,1];

function next_binary_number(array){
    
    // search from right to left, convert 0 to 1, and 1 to 0
    for (var i = array.length-1; i>=0 ; i--) {
        
        if( array[i]==0) {
            // 0 convert to 1
            array[i]=1;
            // if bump into 0, stop looping and break it.
            break;      
        }  else {
            // 1 convert to 0
            array[i]=0;

        }
    }
    // if it has to carry, then add 1 in the front of array
    if ( i < 0 ) {
        array.unshift(1);
    }        

    return next;
}

console.log(next_binary_number(exampleNum));
