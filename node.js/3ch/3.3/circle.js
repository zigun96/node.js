const { PI } = Math;

console.log(exports); // {} => 기본 exports는 빈 객체

// 빈 객체 exports에 프로퍼티 추가
exports.area = (r) => PI * r * r;

exports.circumference = (r) => 2 * PI * r;
