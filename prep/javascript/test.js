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




const myPromise = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("promise ses")
    }, 1000)
})
myPromise.then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
})