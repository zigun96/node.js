var relationship1 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends: function() {
    var that = this; //relationship1 을 가리키는 this를 that에 저장
    this.friends.forEach(function(friend) {
      console.log(that.name, friend);
    });
  },
};
relationship1.logFriends();

const relationship2 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends() {
    this.friends.forEach(friend => { // =>를 쓰면 해당 function에서 쓰는 this는 =>를 건너뛰고 상위의 function 필드를 가르킨다.
      console.log(this.name, friend);
    });
  },
};
relationship2.logFriends();
