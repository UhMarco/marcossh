const menus = {
  main: `
    marcossh [command] <options>

    connect ................... ssh to a profile or direct ssh
    list ...................... list ssh profiles
    add ....................... add an ssh profile
    remove .................... remove an ssh profile
    help ...................... show help menu for a command
    `,

  echo: `
    marcossh echo [phrase]
    `,

  connect: `
    marcossh connect <options> [connection]

    --direct, -d .............. connect via [user@]hostname
    `,

  list: `
    marcossh list
    `,

  add: `
    marcossh add [name] [[user@]hostname]
    `,

  remove: `
    marcossh remove [name] <options>

    --hostname, --host .... remove profile by hostname
    --all, -a ................. removes all profiles
    `,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
