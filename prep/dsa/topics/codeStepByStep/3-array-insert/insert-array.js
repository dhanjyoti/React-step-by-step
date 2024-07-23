let data = [60, 30, 10, 67, 40]
let newEle = 70;
let position = 2;

for(let i=data.length-1; i>=0; i--){
	console.log(data[i]);
	if(i>=position){
		data[i+1] = data[i]
		if(i == position){
			data[i] = newEle;
		}
	}

}
console.log(data)

// to change in the same position

// for(let i=0; i<data.length; i++){
// 	console.log(data[i])
// 	if(i == position){
// 		data[i] = newEle
// 	}
// }
// console.log(data)