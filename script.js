//your JS code here. If required.
let ans = prompt("Enter a string")

let obj = {}

for(let i = 0; i < ans.length; i++){
	if(obj[ans[i]]){
		obj[ans[i]]++
	}
	else {
		obj[ans[i]] = 1;
	}
}
let firstNonRepeatedChar = null;

for (let index = 0; index < ans.length; index++) {
  if (obj[ans[index]] === 1) {
    firstNonRepeatedChar = ans[index];
    break;
  }
}

if (firstNonRepeatedChar) {
  alert(firstNonRepeatedChar);
} else {
  alert("No non-repeated characters found.");
}
// for (let index = 0; index < ans.length; index++) {
// 	if(obj[ans[index]] === 1){
// 		alert(`${ans[index]}`);
// 		break;
// 	}
// }


// alert(${ans})