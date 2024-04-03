// Browser API
// Common JS
// fs, path, http, os, events, etc

const fs = require('fs'); // Common JS
const path = require('path');
const os = require('os');
// import fs from 'fs'; // ES6

console.log(os.platform());
console.log(os.arch());

fs.readFile('hi.txt', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
}); // Read the file

fs.writeFile('hello.txt', 'Hello, Soch!', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully!');
}); // Write file and create

fs.appendFile('hello.txt', '\nHello', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File appended successfully!');
}); // append to file

fs.rename('hello.txt', 'hello-world.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File renamed successfully!');
});

let filePath = "User:/Soch/hello.txt";

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));