const os = require ('os');
// user info
const userinfo = os.userInfo();
console.log(userinfo);
console.log(` the os is running time in secons is ${os.uptime()}`);
const osdetals = {
    name : os.type(),
    release : os.release(),
    totalmemory : os.totalmem(),
    freememory : os.freemem()
}
console.log(osdetals);