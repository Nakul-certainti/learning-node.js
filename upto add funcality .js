 // globals - no window !!!!!
 // __dirname - path to the current directory 
 // __filename - file name 
 // require - funcation to use modules (commonJS)
 // module - info about current module (file)
 // process - info about env where the program is being excuted 
 // console.log(__dirname);
 //setInterval(function(){
 //	 console.log("interval");
 //}, 1000);
 //setTimeout(function(){
	// console.log("Time Out");
 //}, 1000)
 // Modules
const names = require ('./names.js');
const sayHi = require ('./utils.js');
require('./addition.js');
// sayHi(names.name);

// console.log(names.name1);

 