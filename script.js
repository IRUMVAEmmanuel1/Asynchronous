const returnPromise =()=>{
    return new Promise((resolve,rejected) =>{
        const resolveCondition = true;
        if(resolveCondition){
            resolve("Promise Executed")
        }
        else{
            rejected("Invalid COndition in promise")
        }
    });
}

console.log(returnPromise)