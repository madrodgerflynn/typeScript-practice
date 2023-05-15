type Combinable = number;

function combine(input1: number | string , input2: number | string, resultConversion: 'as-number'|'as-text') {
    // union types that allow mulitiple params
    // used in conjuntion with literal types = 'as-number' & 'as-text'
    let result;
    if (typeof input1=== 'number' && typeof input2 === 'number'|| resultConversion === 'as-number') {

        result= +input1+ +input2;
        // adding + will convert into a number
    }else {
        result= input1.toString() + input2.toString();
    }
    // if(resultConversion === 'as-number'){
    //     return +result; --> This is
    // }else {
    //     return result.toString();
    // }
    return result;
    }
    const combinedAges= combine(30, 26, 'as-number');
    console.log(combinedAges);

    const combineStringAges = combine('30', '26', 'as-number')
    console.log(combineStringAges);
    

    const combineNames = combine('Tyler', 'Tae', 'as-text');
    console.log(combineNames);
    