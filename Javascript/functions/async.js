async function getData(){
    let handlePromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Problem solved");
        }, 1000)
    })
    console.log("a")
    let x = await handlePromise
    // handlePromise.then((x)=>{
    //     console.log(x)
    // })
    console.log(x)
    console.log("c")
}
getData()