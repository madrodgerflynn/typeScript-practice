function combine(input1, input2, resultConversion) {
    // union types that allow mulitiple params
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
        // adding + will convert into a number
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if(resultConversion === 'as-number'){
    //     return +result;
    // }else {
    //     return result.toString();
    // }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);
var combineNames = combine('Tyler', 'Tae', 'as-text');
console.log(combineNames);
