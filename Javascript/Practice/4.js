const dhan ={
    firstName: "Dhan",
    lastName: "Rabha",
    birthYear: 1991,
    job: "teacher",
    friend: ["dj", "mike", "rock"],
    hasDriversLicense: true,

    calcAge: function(){
        console.log(this);
        return 2037 - this.birthYear;
    }
}
console.log(dhan.calcAge());
