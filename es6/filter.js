const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6); // ()에 값을 넣으면 필터링되서 값을 전달해주는 함수

console.log(result); // ['exuberant', 'destruction', 'present']

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * 검색 조건에 따른 배열 필터링(쿼리)
 */
const filterItems = (query) => fruits.filter( // (query)에 값을 넣으면 필터링되서 값을 전달해주는 함수
  (el) => el.toLowerCase().includes(query.toLowerCase())
);

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
