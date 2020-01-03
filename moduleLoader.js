const fs = require('fs');
const angularConfig = require('./angular.json');

const ERROR_ILLEGAL_ARGUMENT = "Illegal arguments. Usage : --module=appName";
const ERROR_FILE_WRITE = "Error while writing JSON";

const args = process.argv.slice(2);

if (args.length === 0 || args.length > 1) {
    throw ERROR_ILLEGAL_ARGUMENT;
}

const moduleArg = args[0].split('=');

if (moduleArg.length !== 2 || moduleArg[0] !== '--module') {
    throw ERROR_ILLEGAL_ARGUMENT;
}

const moduleName = moduleArg[1];

const MODULE_WRAPPER = {
    'app1': 'src/app/app1/app1.module.ts',
    'app2': 'src/app/app2/app2.module.ts',
};

const moduleLocation = MODULE_WRAPPER[moduleName];

const buildOptions = angularConfig.projects["angular-test"].architect.build.options;
buildOptions.fileReplacements = [
    {
        "replace": "src/app/entry.module.ts",
        "with": moduleLocation
    }
];

fs.writeFile('./angular.json', JSON.stringify(angularConfig, null, 2), (err) => {
    if (err) {
        console.error(err);
        throw err;
    }
    console.log('angular.json generated!');
});

