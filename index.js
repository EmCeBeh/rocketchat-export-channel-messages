var program = require('commander');

var packagejson = require('./package.json');

program
    .version(packagejson.version)
    .description(packagejson.description)
    .option('-j, --json', 'Export as JSON file rather than CSV')
    .parse(process.argv);
// Check for mandantory "-c" flag
if (!program.channel) {
    program.outputHelp(() => program.help());
}

