const fs = require('fs');
const readline = require('readline');
const request = require('request');

const url = process.argv[2];
const localpath = process.argv[3];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

request(url, (error, response, body) => {

  // writes the data into the localpath 
  fs.writeFile(localpath, body, function(err) {
    if (err) throw err;
    console.log(`Downloaded and saved ${fs.statSync(localpath).size} bytes to ${localpath}.`);
  });

});


// https://www.geeksforgeeks.org/node-js-fs-statsync-method/

