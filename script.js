const loadScript =async (src)=>{
 return new Promise((resolve,reject)=>{
let script=document.createElement("script")
script.src = src
script.onload = ()=>{
resolve(src)
}
 })
}
// // Problem Number#1;
// Write a program to load a java script file in a browser using promises.
// Use then () to display an alert When the load is Complete?
//  let a= await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" )
// a.then((value)=>{
//  return(alart)
// console.log(value)
// })
// // Problem Number#2;
// write the same program from previous question and use async/await Syntax?
// const orign =async () =>{
// console.log(new Date())
//     let a= await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" )
//     console.log(new Date())
//     console.log(a)
// }
// orign()
// // // Problem Number#3;
// // Creat a promise Which reject after 3 second .Use async/await to get its value .
// //  Use a try to catch to handle its error?
// let p =()=>{
//     return new Promisea((resolve,rject)=>{
//    setTimeout(()=>{
//     reject(new Error("pleas not aceptable"))
//    },3000)
// })}
// let a= async ()=>{
//     try{
//        let c= await p()
//        console.log(c)
//     }
//     catch(error ){
//         console.log("this error has been handeld")
//     } 
// }
// a()

// // Problem Number#4;
// Write a program  using promises.all( )inside an async/await to await 3 promises.
// //  Compair its resullt withthe case where we await?
// let p1 =async()=>{
//    return new Promisea((resolve,rject)=>{
//    setTimeout (()=>{
//    resolve(15)     
//    },2000)
// });
// }
// let p2 =async()=>{
//     return new Promisea((resolve,rject)=>{
//     setTimeout (()=>{
//     resolve(10)     
//     },3000)
//  });
//  }
//  let p3 =async()=>{
//     return new Promisea((resolve,rject)=>{
//     setTimeout (()=>{
//     resolve(20)     
//     },1000)
//  });
//  }
//  const run = async ()=>{
//     // console.time("run")
//     // let a1 = await p1()
//     // let a2 = await p2()
//     // let a3 = await p3()
//     // console.log(a1,a2,a3) 
//     // console.timeEnd("run")
//    let a1a2a3 = await Promise.all([a1,a2,a3])
//    console.log(a1a2a3)     
// }
// run()






