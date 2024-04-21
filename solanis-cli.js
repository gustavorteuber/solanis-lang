#!/usr/bin/env node
const solanis = require('./index.js'); 

function main() {
    const args = process.argv.slice(2);
    
    const code = args.join(' ');

    solanis.interpret(code);
}

main();
