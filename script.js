const returnPromise =()=>{
    return new Promise((resolve,rejected) =>{
        const resolveCondition = true;
        setTimeout(()=>{if(resolveCondition){
            resolve("Promise Executed")
        }
        else{
            rejected("Invalid COndition in promise")
        }},200)
        console.log("I am executed before promise resolved")
    });
}

console.log(returnPromise())