//  Indirect Recursion

let money = 100;
let apple = 0;

function buyApple(money){
    console.log(money)
    if(money > 0){
        buyMore(money);
    } else {
        console.log("No more money", apple);
    }
}
function buyMore(money){
    apple++;
    // money = money - 10;
    buyApple(money - 10);
    // console.log("buying apple", money);
}


buyApple(money);