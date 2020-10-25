const jsonfile = require('jsonfile');

module.exports = (margs) => {
  args = margs._.slice(1);

  let profiles = jsonfile.readFileSync(__dirname + '/../profiles.json');

  if (!args[0] || !args[1]) {
    return console.log('\n    Missing input. Do "marcossh add -help" for syntax.\n');
  } else if (profiles[args[0]]) {
    return console.log(`\n    Profile '${args[0]}' already exists.`);
  } else if (!Object.values(profiles).indexOf(args[1])) {
    return console.log(`\n    The profile '${Object.keys(profiles).find(key => profiles[key] === args[1])}' is already using that hostname.\n`);
  }

  profiles[args[0]] = args[1];
  jsonfile.writeFileSync(__dirname + '/../profiles.json', profiles);

  console.log(`\n   Profile '${args[0]}' created leading to '${args[1]}'.\n`);
};
