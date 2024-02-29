// Print props and value
// I am the key and I am the value
// key-> id value-> 1
// key= dny1 calue = test

let arr = [
    {
      id: 1,
      dny1: "test"
    },
    {
      id: 2,
      dny2: "test"
    },
    {
      id: 3,
      dny3: "test"
    },
    {
      id: 4,
      dny4: "test"
    },
    {
      id: 5,
      dny5: "test"
    }
  ]

for(let i=0; i<arr.length; i++){
    let value = arr[i];
    for(let key in value){
        console.log(`I am the ${key} & I am the ${value[key]}`);
    }
}

  // for(let key of arr){
  //   for(let data in key){
  //     console.log(`I am the ${data} and I am the ${key[data]}`);
  //   }
  // }

  // arr.forEach(obj => {
  //   Object.keys(obj).forEach(key => {
  //     const value = obj[key];
  //     console.log(`I am the key ${key} and I am the value ${value}`);
  //   });
  // });
