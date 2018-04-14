const opencc = require('node-opencc');
const fs = require('fs');

var text = fs.readFileSync('0.txt','utf8');
var text2 = opencc.simplifiedToTaiwan(text);
//text2 = text2.replace(/[(\r\n)]{2,10}/g,"\r\n");
text2 = text2.replace(/\r\n\s+/g,"\r\n");
text2 = text2.split('').join(' ');
text2 = text2.replace(/[(\r\n )]{3,10}/g,"\r\n\r\n");

if (fs.existsSync('2.txt')) {
  fs.unlinkSync('2.txt');
}

fs.writeFileSync('2.txt', text2, 'utf8');