const menus = {
  main: `
    marcossh [command] <options>

    connect ............ ssh to a profile or direct ssh
    ls ................. list ssh profiles
    add ................ add a ssh profile
    remove ............. remove an ssh profile
    help ............... show help menu for a command
    `,

  echo: `
    marcossh echo [phrase]
    `,

  connect: `
    marcossh connect [connection] -d

    --direct, -d ....... connect via [user@]hostname
    `,

  ls: `
    marcossh ls
    `,

  add: `
    marcossh add [name] [[user@]hostname] <options>

    --no-name, -nm ..... set profile name to hostname
    `,

  remove: `
    marcossh remove [name] <options>

    --all, -a .......... removes all profiles
    `,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}