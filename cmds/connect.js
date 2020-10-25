const shell = require('shelljs');
const fs = require('fs')

module.exports = (margs) => {

  args = margs._.slice(1)

  if (margs.direct || margs.d) {
    console.log(`Direct connect: ${args}`);
    shell.exec(`osascript -e 'tell app "Terminal" to do script "ssh ${args}"'`)
  } else {
    console.log(`Connect to profile: ${args}`);
  }

};
