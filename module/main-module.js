const names = require('./module/step1');
const bodydata = require('./module/step2');
const data = require('./module/step3');
const mod = require('./module/step4');

const { p, k } = require('./module/step5');

p();
k();
bodydata(names.galla)
bodydata(names.raji)
console.log(names.num);
console.log(data.items);
console.log(data.objects.name)
console.log(data.objects.place)
console.log(data.objects.age)
console.log(names.z);

mod.f();

