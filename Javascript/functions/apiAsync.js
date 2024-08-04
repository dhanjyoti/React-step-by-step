async function getData(){
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    data = await data.json();
    console.log(data)
}
getData();