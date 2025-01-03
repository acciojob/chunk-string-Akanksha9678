function stringChop(str, size) {
  // your code here
	if(str==null){
		return []
	}
	let array=[];
	for(let i=0;i<str.length;i=i+size){
		let a=str.slice(i,i+size);
		array.push(a);
		
	}
	return array;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
