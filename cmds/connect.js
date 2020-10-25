const shell = require('shelljs');
const jsonfile = require('jsonfile');
const fs = require('fs')

module.exports = (margs) => {

  args = margs._.slice(1)

  const target = margs.direct || margs.d || null

  if (target) {
    console.log(`\nDirect connect: ${target}`);
    shell.exec(`osascript -e 'tell app "Terminal" to do script "ssh ${target}"'`)
  } else {
    const profiles = jsonfile.readFileSync(__dirname + '/../profiles.json')
    if (profiles[args]) {
      console.log(`\nConnect to profile: ${args}`);
      shell.exec(`osascript -e 'tell app "Terminal" to do script "ssh ${profiles[args]}"'`)
    } else {
      console.log(`\nProfile '${args}' does not exist.\n`);
    }

  }

};
