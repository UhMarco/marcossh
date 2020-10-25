const jsonfile = require('jsonfile');

module.exports = (margs) => {
  args = margs._.slice(1);

  let profiles = jsonfile.readFileSync(__dirname + '/../profiles.json');
  const deleteByHostname = margs.host || margs.hostname || null

  if (!profiles[args[0]] && !deleteByHostname) {
    return console.log(`\n    Profile '${args[0]}' does not exist.\n`);
  } else if (deleteByHostname && Object.values(profiles).indexOf(deleteByHostname)) {
    return console.log(`\n    No profile is using the hostname ${deleteByHostname}.\n`);
  }

  let target = deleteByHostname ? Object.keys(profiles).find(key => profiles[key] === deleteByHostname) : args[0]
  console.log(`\n   Deleted profile '${target}' with hostname '${profiles[target]}.'\n`);
  delete profiles[target]
  jsonfile.writeFileSync(__dirname + '/../profiles.json', profiles);
};
