let arr = [1,2,3,4];
let newarr = arr.reduce((h1,h2)=>{
  return h1+h2;
}) 
console.log(newarr);  

// let arr = [1,2,3,4];
// let newarr = arr.filter((u)=>{
//   return u>3;
// } )
// console.log(newarr);


// let arr = [1,2,3,4];
// let newarr = arr.map((value,index)=>{ 
//    console.log(value,index);
// }) 
// console.log(arr)

// let counter = countCo();
// function countCo(){
//   return {
//     count:0,
//     inc:function(){
//       this.count++;
//     }
//   }
// } 
// counter.inc();
// counter.inc();
// console.log(counter)