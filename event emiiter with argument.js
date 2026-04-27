const EventEmmiter = require('events')

const customEmmiter = new EventEmmiter();
customEmmiter.on('response',(name,id)=>{
    console.log(`envent logged ${name} ${id}`);
})
customEmmiter.emit('response','nakul','100');