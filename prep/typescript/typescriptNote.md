**tuple** - here we can define type of values specifically inside an array, but in array we have to specify only one type of value in typescript.

**enum** - A group of constant, that can assign a number of our string and make an easy comparison. Ef - enum Role{values};

**any** - If we use `any` there is no restriction to the type of data that we choose. But here we have the chance of getting real time error in production, since type is not defined.

**Union type** - Union type describes a value that can be one of several types.
 
**Literal type** - Apply values rather than apply type to a variable or a parameter.
Eg - 
    let data: string | number = "Hello";
    let data: "abc" | 123 = "abc";

