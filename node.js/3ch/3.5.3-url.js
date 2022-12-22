const axios = require('axios');
// const { URL, URLSearchParams } = require('url');

const url = 'https://jsonplaceholder.typicode.com/posts';
const params = { userId: 1, _start: 0, _limit: 3 };

// 방법 1
axios.request({ url, params })
  .then((response) => console.log(response.data))
  .catch(console.error);

// 방법 2
const searchParams = new URLSearchParams(params);
searchParams.set('_start', 3);
console.log('searchParams.toString():', searchParams.toString());

// 방법 3
const myUrl = new URL('https://jsonplaceholder.typicode.com/posts?' + searchParams);
console.log('new URL().searchParams:', myUrl.searchParams);

axios.get(myUrl)
  .then((response) => console.log(response.data))
  .catch(console.error);
