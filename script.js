const returnPromise =()=>{
    return new Promise((resolve,rejected) =>{
        const resolveCondition = true;
        if(resolveCondition){
            resolve("Promise Executed")
        }
    })
}