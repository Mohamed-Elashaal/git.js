{
console.log("q1");

var result=Number("123")+7;
console.log(result);
}

{
console.log("q2");
var num=0
if (!num) {
    console.log("invaild");
}

}
{
console.log("q3");
for (let x=0;x<10;x++){
    if(x%2!==0){
        console.log(x);
        
    }

}
}

{
console.log("q4");
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // 
}

{
console.log("q5");

let arr=[1,2,3]
let arr2=[4,5,6]
let arr3=[...arr,...arr2]
console.log(arr3);
}
{

console.log("q6");

let key=2;
switch (key) {
    case key=1:
        console.log("sat");
        break;
    case key=2:
        console.log("sun");
        break;
    case key=3:
        console.log("mon");
        break;
    case key=4:
        console.log("tue");
        break;
    case key=5:
        console.log("wen");
        break;
    case key=6:
        console.log("thur");
        break;
    case key=7:
        console.log("fri");
        break;

    default:
        break;
}
}


{
    console.log("q7");
let arr5=["a","ab","abc"]
let output=arr5.map((str)=>str.length);
console.log(output);

}
{
console.log("q8");

function dev(n){
    if (n%3==0,n%5==0) {
        console.log("divisible by both");
    }
    else
            {
            console.log("NOT divisible by both");
        }      


}
dev(15)


}


{

console.log("q9");
function squre(num){
    console.log(num*num);
    
}

squre(5)


}


{ console.log("q10");

function getPerson(person) {

    const { name, age } = person;
    
    console.log(name, "is", age, "years old");
}

const person = { name: 'John', age: 25 };

getPerson(person);

}
{
console.log("q11");
function sum(...numbers){
    let total=0;
    for(x=0;x<numbers.length;x++){
        total+=numbers[x]
    }
    return total
}
console.log(sum(1,2,3,4,5));
}
{
console.log("q12");

function Success() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

Success().then((message) => {
    console.log(message); });


}


{
console.log("q13");
function large_num(arr){
    let max =arr[0];
   for(x=0;x<arr.length;x++){
    if (arr[x]>max) {
        max=arr[x]
        
    }

    
   }
   return max;
    
}
console.log(large_num([1,3,7,2,4]));

}


{
    console.log("q14");

   function x(obj) {
  return Object.keys(obj);
}

const person = { name: "John", age: 30 };
console.log(x(person)); 

}

{

console.log("q15");
function arr(str){
    return str.split("  ")

}
let text="the quick brown fox ";
console.log(arr(text));

}
