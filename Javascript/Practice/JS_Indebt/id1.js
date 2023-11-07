// function add(a,b,c){
//     return a+b+c;

// }

// let result = add(1,2,3);
// console.log(result)

// curring function

function Addition(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
  
  // let result = Addition(4);
  // console.log(result);
  // let data = result(3);
  // console.log(data);
  // let data1 = data(4);
  // console.log(data1);
  
  let result = Addition(4)(3)(4);
  console.log(result);
  
  userData = {
    name: "Nidhi",
    age: "24",
    Product: "lakme Kajal",
  };
  function userInfo(obj) {
    return function (userInfo) {
      return obj[userInfo];
    };
  }
  
  let res = userInfo(userData)("name");
  console.log(res);