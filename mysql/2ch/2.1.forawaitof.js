var array = ['성공1','성공2','성공3','성공4','성공5'];

const promise1 = Promise.resolve(array);
const promise2 = Promise.resolve('성공6');

// 이름없는 함수 선언 및 바로 호출
(async () => { 
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})(); 
