//Readable streams - read data line by line

const fs = require('fs');
const readline = require('readline');

const ans = readline.createInterface({
    input: fs.createReadStream('./data.txt')
})

const print = (data) => {
    console.log(`Topic : ${data}`)
}

ans.on('line', print);


//Writeable Streams - reading and writing to other files

const filestream = fs.createWriteStream('output.txt');

const transformData = (line) => {
    filestream.write(`Product : ${line}\n`)
}

ans.on()


let iterations = 0;

const interval = setInterval(() => {
    console.log('I get called every 1 second.');
    iterations++;
    if (iterations >= 3) {
        console.log('Canceling interval.')
        clearInterval(interval);
    }
}, 1000);

const printData = (data) => {
    console.log(`data would be ${data}`)
}

