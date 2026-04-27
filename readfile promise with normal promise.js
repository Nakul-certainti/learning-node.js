const {readFile} = require ('fs');

const getText = (path) =>{
    return new Promise ((resolve,rejects) =>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                rejects(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

const start = async() =>{
    try{
    const first = await getText('./path/firs.txt');
    console.log(first);
    }
    catch(err){
        console.log(err);
    }
}

start();
// getText('./path/firs.txt').then((result) => console.log(result)).catch((err) => console.log(err));