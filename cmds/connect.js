const shell = require('shelljs');
const fs = require('fs')

module.exports = (margs) => {

  args = margs._.slice(1)

  const target = margs.direct || margs.d || null

  if (target) {
    console.log(`Direct connect: ${target}`);
    shell.exec(`osascript -e 'tell app "Terminal" to do script "ssh ${target}"'`)
  } else {
    console.log(`Connect to profile: ${args}`);
  }

};
