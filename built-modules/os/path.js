const path = require('path');

//The path module provides utilities for working with file and directory paths. It can be accessed using:

// const basename = process.env.PATH.split(path.delimiter);
// console.log(basename);

// const delimiter = path.delimiter;
// console.log(process.env.PATH);

// const dirname = path.dirname('C:\nodeexss\built-modules\os\os.js');
// console.log(dirname);

// const extname = path.extname('C:\nodeexss\built-modules\os\os.');
// console.log(extname);

// console.log(path.format({
//   root: '/',
//   dir: 'C:/nodeexss/built-modules/os/',
//   base: 'os.js'
//   }));

//   console.log(path.isAbsolute('text.js'))

  console.log(path.join('/nodeexss/','module'));

  console.log(path.normalize('/nodeexss/','...'));
  console.log(path.parse('C:\nodeexss\module\step1.js'));
  console.log(path.resolve('C:\nodeexss\module\step1.js'));
 
