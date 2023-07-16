//your JS code here. If required.
let ans = prompt("Enter a string")

let obj = {}

for(let i = 0; ans.length; i++){
	if(obj[str[i]]){
		obj[str[i]]++
	}
	else {
		obj[str[i]] = 1;
	}
}

for (let index = 0; index < ans.length; index++) {
	if(obj[str[index]] === 1){
		alert(str[index]);
		break;
	}
}


alert(${ans})