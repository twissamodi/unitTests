function areWordsRepeating(stringInput){
    if(typeof(stringInput)!=='string'){
        throw new Error('You must provide a string.')
    }
    stringInput=stringInput.toLowerCase();
    const individualWords=stringInput.split(" ");
    let mapOfWords={};
    for(let i=0;i<individualWords.length;i++){
        let currentValue=mapOfWords[individualWords[i]];
        if(currentValue)
            return true;
        mapOfWords[individualWords[i]]=1;
    }
    return false;
}

const string="";
if(areWordsRepeating(string))
    console.log('Words are repeating.');
else
    console.log('Words are not repeating.');
module.exports=areWordsRepeating;