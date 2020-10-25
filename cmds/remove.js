const jsonfile = require('jsonfile');

module.exports = (margs) => {
  args = margs._.slice(1);

  let profiles = jsonfile.readFileSync('profiles.json');
  const deleteByHostname = margs.host || margs.hostname || null

  if (!profiles[args[0]] && !deleteByHostname) {
    return console.log(`Profile '${args[0]}' does not exist.`);
  } else if (deleteByHostname && Object.values(profiles).indexOf(deleteByHostname)) {
    return console.log(`No profile is using the hostname ${deleteByHostname}.`);
  }

  let target = deleteByHostname ? Object.keys(profiles).find(key => profiles[key] === deleteByHostname) : args[0]
  console.log(`Deleted profile '${target}' with hostname '${profiles[target]}.'`);
  delete profiles[target]
  jsonfile.writeFileSync('profiles.json', profiles);
};