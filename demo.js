
console.log("Hello");

setTimeout(() => {
    console.log("Done")
},2000)

console.log(__dirname);
console.log(__filename);
console.log(process.arch);
console.log(process.cwd());
console.log(process.version);
console.log(process.platform);
console.log(process.memoryUsage);
console.log(process.argv);

const os = require('os');

const local = {  
  'Home Directory': os.homedir(),    
  'Operating System': os.type(),
  'Last Reboot': os.uptime()
}

console.log(local)

console.log(os.freemem())