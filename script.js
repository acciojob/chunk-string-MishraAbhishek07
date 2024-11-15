function stringChop(str, size) {
  // your code here
if(str==null||str.length==0){
	return []
}
	if(str.length<size){
		return[str]
	}
	let ans=[]
	let temp=""
	for(let i=0;i<str.length;i++){
		temp+=str.charAt(i)
		if(temp.length==size){
			ans.push(temp)
			temp=""
		}
	}
if (temp!="")
{
	ans.push(temp)
}
return ans
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));