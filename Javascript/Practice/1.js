// alert("enter a: ");
// let a = prompt("enter here");
// a = Number.parseInt(a);
// alert(typeof a);
// let write = confirm("Do you want to write");
// if(write){
//     document.write(a)
// }else{
//     document.write("allow me to write");
// }

fetch('https://gorest.co.in/public/v2/users')
.then((response)=> response.json())
.then(data => {
    console.log(data)
})
.catch(error => console.error('Error: ', error));