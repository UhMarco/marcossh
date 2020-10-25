const shell = require('shelljs');
const jsonfile = require('jsonfile');
const fs = require('fs')

module.exports = (margs) => {

  args = margs._.slice(1)

  const target = margs.direct || margs.d || null

  if (target) {
    console.log(`Direct connect: ${target}`);
    shell.exec(`osascript -e 'tell app "Terminal" to do script "ssh ${target}"'`)
  } else {
    const profiles = jsonfile.readFileSync('profiles.json')
    if (profiles[args]) {
      console.log(`Connect to profile: ${args}`);
      shell.exec(`osascript -e 'tell app "Terminal" to do script "ssh ${profiles[args]}"'`)
    } else {
      console.log(`Profile '${args}' does not exist.`);
    }

  }

};
