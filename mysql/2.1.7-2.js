const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  } else {
    reject('실패');
  }
});

promise
  .then((message) => {
    return new Promise((resolve, reject) => {
      resolve(message);
    });
  })
  .then((message2) => {
    console.log('메서드 체이닝'); // '메서드 체이닝' 출력
    return new Promise((resolve, reject) => {
      resolve(message2);
    });
  })
  .then((message3) => {
    console.log(message3); // '성공' 출력
  })
  // .then(console.log);

  .catch((error) => {
    console.error(error);
  });
  // .catch(console.log);
