console.log('require가 가장 위에 오지 않아도 됩니다.');
module.exports = '저를 찾아보세요.';

require('./3.3-var');

console.log('require.cache입니다.');
console.log(require.cache); // [Object: null prototype] {...}

console.log('require.main입니다.');
console.log(require.main === module); // true
console.log(require.main.filename); // /home/ubuntu/node.js/mysql/3ch/3.4.5-require.js

 