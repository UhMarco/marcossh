const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2));

  let cmd = args._[0] || 'help';

  if (args.help || args.h) {
    cmd = 'help'
  }

  switch (cmd) {
    case 'echo':
      require('./cmds/echo')(args);
      break;

    case 'connect':
      require('./cmds/connect')(args);
      break;

    case 'add':
      require('./cmds/add')(args);
      break;

    case 'remove':
      require('./cmds/remove')(args);
      break;

    case 'help':
      require('./cmds/help')(args);
      break;

    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  };
};
