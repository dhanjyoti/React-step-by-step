// print only those object that contains "ra"

let arr = [
    {
        name: "rahul"
    },
    {
        name: "dhan"
    },
    {
        name: "ram"
    },
    {
        name: "shyam"
    },
    {
        name: "ratan"
    }
];

for(let key in arr){
    if((arr[key].name).includes("ra") ){
        console.log(arr[key]);
    }
}