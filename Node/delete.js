const fs = require('fs');
const dataf = fs.readFileSync("fsdata.txt", 'utf8');
console.log(dataf);

if (dataf.match('Node')) {
  const bs = dataf.replace('Node', "");
  fs.writeFileSync('fsdata.txt', bs);

}
console.log("End of File ");