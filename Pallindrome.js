let str = "naman";
bag = "";
for(let i = str.length-1; i>=0; i--){
bag += str[i];
}
if(bag == str){
    console.log("Yes,It's Pallindrome");
}
else if(bag != str){
    console.log("NO, It's not pallindrame");

}