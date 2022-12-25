const fs = require('fs')

let date = new Date();
const text = `currentdate=${date.toLocaleDateString()},currenttiming=${date.toLocaleTimeString()}`;
console.log(text)
console.log(date.toString().slice(4,21).split(" ").join("-"))
  fs.writeFile( 
        `./backup/text-${date.toString().slice(4,21).split(" ").join("-").split(":").join("_")}.txt`,text, (err) => {
            console.log('completed')
        })






   

