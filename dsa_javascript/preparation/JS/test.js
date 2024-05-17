function Person(age, fname, classes) {
  this.age = age;
  this.fname = fname;
  this.classes = classes;
}
Person.prototype.lname = "roi";

let details = new Person(34, "hari", 5);
console.log(details.lname)
