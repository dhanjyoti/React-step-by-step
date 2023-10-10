// Calculate BMI using object notation

const person1 = {
    fullName: "dhanjyoti",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const person2 = {
    fullName: "rabha",
    mass: 90,
    height: 1.90,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
person1.calcBMI();
person2.calcBMI();

if(person1.bmi > person2.bmi){
    console.log(`${person1.fullName}'s BMI (${person1.bmi.toFixed(1)}) is higher than ${person2.fullName}'s (${person2.bmi.toFixed(1)})!`);
} else if(person2.bmi > person1.bmi){
    console.log(`${person2.fullName}'s BMI (${person2.bmi.toFixed(1)}) is higher than ${person1.fullName}'s (${person1.bmi.toFixed(1)})!`);
} else {
    console.log(`${person1.fullName} and ${person2.fullName} has the same bmi ${person1.bmi.toFixed(1)}, it's a tie.`);
}