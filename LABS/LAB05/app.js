console.log("Hello world"); //Q1

//Q2
const os = require('os');
const fs = require('fs');

const fileName = __dirname + '/test.txt';

fs.readFile(fileName, (err, data) =>{
    if(err){
        console.error(err);
    }
    console.log(data);
})

console.log("Architecture " + os.arch());
console.log("CPUs " + os.cpus.length);
console.log("OS " + os.platform());

//Q4
const outFileName = __dirname + '/test-copy.txt';
const createReadStream = fs.createReadStream(fileName);
const createWriteStream = fs.createWriteStream(outFileName);

createReadStream.pipe(createWriteStream);

createReadStream.on('data', data =>{
    console.log(data.toString());
})

//Q5
const http = require('http');

// http.createServer((req, res) =>{
//     res.setHeader('Content-Type', 'text/html');
//         res.write('<h1>Hello World!</h1>');
//         res.end();
// }).listen(3000);

http.createServer((req, res) =>{
    res.setHeader('Content-Type', 'text/html');
    switch (req.method){
        case 'GET':
            res.write('<h1>Hello World!</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data =>{
                res.write('<h1>Hello ' + data + '</h1>');
                res.end(); 
            })
            break;

    }
}).listen(3000, (err) =>{
    console.log("The server is listening on port 3000");
});
