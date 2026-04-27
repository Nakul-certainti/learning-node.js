const {readFile, writeFile} = require ('fs').promises;
// const utils = require('util');
// const readFilePromise = utils.promisify(readFile);
// const writeFilePromise = utils.promisify(writeFile);

const start = async() =>{
    try{
    const first = await readFile('./path/firs.txt','utf8');
    await writeFile('./path/new.txt','hello hi bye \n' , {flag : 'a'})
    console.log(first);

    }
    catch(err){
        console.log(err);
    }
}
// const start = async() =>{
//     try{
//     const first = await readFilePromise('./path/firs.txt','utf8');
//     await writeFilePromise('./path/new.txt','hello hi' )
//     console.log(first);

//     }
//     catch(err){
//         console.log(err);
//     }
// }

start();
// getText('./path/firs.txt').then((result) => console.log(result)).catch((err) => console.log(err));