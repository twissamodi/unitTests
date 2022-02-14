function isArmstrongNumber(number){
    if(number<0){
        throw new Error('You must provide a non-negative number.');
    }
    if(typeof(number)!=='number')
        throw new Error('You must provide a number.');
    if(!Number.isInteger(number))
        throw new Error('You must provide an integer.')
    const numberofdigits=number.toString().length;
    let sumofnumbers=0;
    let temp=number;
    while(temp>0){
        const digit=temp%10;
        sumofnumbers=sumofnumbers+(digit**numberofdigits);
        temp=Math.floor(temp/10);
    }
    return sumofnumbers === number;
}


function printArmstrongNumberTillN(number){
    if(number<0){
        throw new Error('You must provide a non-negative number.');
    }
    if(typeof(number)!=='number')
        throw new Error('You must provide a number.');
    if(!Number.isInteger(number))
        throw new Error('You must provide an integer.')
    let resultantArray=[]
    for(let i=0;i<=number;i++){
        if(isArmstrongNumber(i)){
            console.log(i);
            resultantArray.push(i);
        }
    }
    return resultantArray;
}

module.exports={
    printArmstrongNumberTillN,
    isArmstrongNumber
}

