//it is a suncronized 
// const {readFileSync , writeFileSync, write} = require ('fs');
// const first = readFileSync('./path/first.txt','utf-8');
// console.log(first);
// writeFileSync ('./path/firsts.txt', `file is overrided from the ${first}`,{flag : 'a'});
// console.log(first);

// it is a a sunconized one 
const {readFile , writeFile}= require('fs');
console.log("startting");
readFile('./path/first.txt','utf8' ,(err,result) => {
    if(err){
        console.log(err);
    }
    else{
    const content = result;
    console.log(content);
    }
    writeFile('./path/firs.txt',`hihello`,(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("completed this task");
    }
});

});
console.log("starting the next task");

