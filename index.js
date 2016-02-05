const readline = require('readline');
const open = require('open');
const querystring = require('querystring');

const helper_urls = {
    stackoverflow: ['http://stackoverflow.com/search?q=', '[javascript] {query}'],
    google: ['https://www.google.com/search?q=', 'javascript "{query}"']
};

var current = 'stackoverflow';

exports.help_urls = helper_urls;
exports.default = function setup(new_helper) {
    if (!helper_urls[new_helper]) {
        throw new Error("No such a helper '" + new_helper + "'.  Available: " + Object.keys(helper_urls).join(' '));
    }
    current = new_helper;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

process.on('uncaughtException', function(err) {
    if (err instanceof Error) {
        console.error(err.message + '\n');
        console.error(err.stack);
    } else {
        console.error(err);
    }
    rl.question('\nDo you want to search the message with ' + current + '? (Y/n): ', function(answer) {
        if (answer === '' || /[Yy](es)?/.test(answer)) {
            var msg;
            if (err instanceof Error) {
                msg = err.message;
            } else if (typeof err === 'string') {
                msg = err;
            } else {
                msg = err.toString();
            }
            const helper = helper_urls[current];
            const url = helper[0] + querystring.escape(helper[1].replace('{query}', msg));
            open(url);
        }
        process.exit(1);
    });
});
