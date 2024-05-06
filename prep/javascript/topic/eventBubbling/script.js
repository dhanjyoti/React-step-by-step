let check = document.getElementById('check')

function func1(event){
    if(check.checked){
        event.stopPropagation()
    }
    console.log("div1 is clicked")
}

function func2(){
    console.log("div2 is clicked")
}

let anchor = document.getElementById('myAnchor');

anchor.addEventListener('click', (e)=>{
    e.preventDefault()
})