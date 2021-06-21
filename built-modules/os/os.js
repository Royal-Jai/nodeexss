//operating system(os)

const { Console } = require('console');
const os = require('os');

//operating system specific end of line marker
const endl = os.EOL;
console.log('this is EOL'+endl+"new line");

//operating system cpu architecture process value
const arch = os.arch();
console.log('this is architecture', arch);

//operating system constants for error codes
const constants = os.constants;
console.log('this is constants for error codes', constants);

//Returns an array of objects containing information about each logical CPU core.
const cpus = os.cpus();
console.log('this is Returns an array of objects containing information about each logical CPU core', cpus);

//Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled.
const endianness = os.endianness();
console.log('this is Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled', endianness);

//Returns the amount of free system memory in bytes as an integer.
const freememory = os.freemem();
console.log('this is Returns the amount of free system memory in bytes as an integer', freememory);

//Returns the scheduling priority for the process specified by pid. If pid is not provided or is 0, the priority of the current process is returned.
const getper = os.getPriority();
console.log('this is Returns the scheduling priority for the process specified by pid. If pid is not provided or is 0, the priority of the current process is returned',getper );

const hostname = os.hostname();
console.log('this is hostname', hostname);

const platform = os.platform();
console.log('this is platform', platform);

const type = os.type();
console.log('this is type', type);
// module.exports = eol
