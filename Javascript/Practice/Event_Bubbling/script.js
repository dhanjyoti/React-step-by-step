const div = document.querySelector("div");
const p = document.getElementsByTagName("p")[0];
const button = document.getElementsByTagName("button")[0];

div.addEventListener('click',()=>{
    console.log("third");
})
p.addEventListener('click',()=>{
    console.log("second");
})
button.addEventListener('click',()=>{
    console.log("first");
})