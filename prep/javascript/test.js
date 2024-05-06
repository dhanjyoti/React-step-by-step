// function* count(){
//     yield 2;
//     yield 4;
//     yield 6;
//     yield 8;
//     yield 10;
//     yield 12;
// }
// const even = count();

// for(const v of even){
//     console.log(v);
// }


document.getElementById('itemList').addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        console.log("Clicked on:", event.target.textContent);
    }
})