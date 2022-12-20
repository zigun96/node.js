async function findAndSaveUser(Users) {
  try {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm'});
    console.log(user); // 생략
  } catch (error) {
    console.error(error); // try, catch로 감싸면 오류시 프로그램이 종료되지않고 오류문구 출력이 가능하다.
  }
}
findAndSaveUser(require('./Users.js'));
