function combine(input1: number | string , input2: number | string, resultConversion: string) {
    // union types that allow mulitiple params
    let result;
    if (typeof input1=== 'number' && typeof input2 === 'number') {

        result= input1+input2;
    }else {
        result= input1.toString() + input2.toString();
    }
    if(resultConversion === 'as-number'){
        return +result;
    }else {
        return result.toString();
    }
    }
    const combinedAges= combine(30, 26, 'as-number');
    console.log(combinedAges);

    const combineStringAges = combine('30', '26', 'as-number')
    console.log(combineStringAges);
    

    const combineNames = combine('Tyler', 'Tae', 'as-text');
    console.log(combineNames);
    