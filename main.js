
// var user= {
//     name:"ahmed",
//     age: 10,
//     gender :"male",
//     getage:function(){
        

//         var inner= ()=>{
//             console.log("inner func : " +this.gender);
            
//         }
//         inner()
//         return this.age;
//     }
// };
// console.log(user.getage());
var arr=[1,2,3,4,5];
 res= arr.map(function(value,index,obj){
    console.log(value);
    console.log(index);
    console.log(obj);
return value *2
  })
console.log("this is final result ");
console.log(res);
















