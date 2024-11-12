// function fullName(hello, bye){
//     console.log(`${hello} ${this.firstName} ${this.lastName} ${bye}`)
// }

// name1 = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

// name2 = {
//     firstName: 'Johnny',
//     lastName: 'Doe'
// }

// fullName.call(name1, 'Hello', 'Bye')
// fullName.call(name2, 'Hello', 'Bye')

// name1 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function(hello, bye){
//         console.log(`${hello} ${this.firstName} ${this.lastName} ${bye}`)
//     }
// }
// name2 = {
//     firstName: 'Johnny',
//     lastName: 'Doe'
// },
// name1.fullName.bind(name2, 'hello', "Bye")();

// function fullName(){
//     console.log(`${this.firstName} ${this.lastName}`)
// }

// name1 = {
//     firstName: 'John',
//     lastName: 'Doe'
// }
// name2 = {
//     firstName: 'Johnny',
//     lastName: 'Doe'
// }
// const bindingMethod = fullName.bind(name2);
// bindingMethod();

// let student = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

// function subjects(sub1, sub2, sub3){
//     return `${this.firstName} is name and surname is ${this.lastName} studies ${sub1}, ${sub2}, ${sub3}`
// }
// let fullName = subjects.bind(student, "maths", "english", "science")();
// console.log(fullName)

// function fullName(hello, bye)

