
function sum({num1=1,num2=2,num3=3}){
    
    console.log("nums");
    console.log("1",num1);
    console.log("2",num2);
    console.log("3",num3);
    
    return num1+num2+num3
}


var object={
    num1 : 1 ,
    num2 : 3,
    num4 : 5
}
var {num1,num2:numtwo,num3}=object
console.log(num1,object.num4,numtwo,num3);


 
{var x=10
    
    console.log(x);
}
console.log(x);
0


