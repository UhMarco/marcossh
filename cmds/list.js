const jsonfile = require('jsonfile');

module.exports = (margs) => {
  args = margs._.slice(1);

  const profiles = jsonfile.readFileSync(__dirname + '/../profiles.json');

  if (Object.values(profiles) == 0) {
    return console.log('\n    No profiles saved.\n');
  }
  console.log('\n   --- Profiles: ---');
  Object.keys(profiles).forEach((key, i) => {
    console.log(`   ${key}: ${profiles[key]}`);
  });
  console.log();

};
