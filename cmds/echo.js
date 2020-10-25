module.exports = (args) => {
  console.log(args._.slice(1).join(" ") || "nothing :(");
}
