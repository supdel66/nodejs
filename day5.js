const sum =(x,y,callback)=>{
    const temp= x+y
    callback(temp)
}
function output(temp){
    console.log(temp);
}
sum(3,2,output)

function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const s=true
            if (s){
                resolve("data fetched")
            }
            else{
                reject('no fetch')
            }
        },2000)

    })
}


async function display(){
 console.log('in function')
 const data = await fetchData();
 console.log(data)
 console.log("final")
}

display();


//callstack callqueue webapis
//this is event loop
// <- <- <-

const fs= require('fs')
fs.readFile('gitcodes.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})



