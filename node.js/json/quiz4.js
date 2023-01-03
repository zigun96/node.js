const json = `{
  "user": [
    {
      "firstName": "Ray",
      "lastName": "Villalobos"
    },
    {
      "firstName": "John",
      "lastName": "Jones"
    },
    {
      "firstName": "Ashley",
      "lastName": "Allen"
    }
  ]
}`;

let obj = JSON.parse(json);
obj = obj.user.map((user) => user.firstName+ " "+ user.lastName);
// 방법 1
obj.forEach((value) => console.log(value));
// 방법 2
console.log(JSON.stringify(obj, null, 1));
