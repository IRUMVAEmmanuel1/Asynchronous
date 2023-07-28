const returnPromise =()=>{
    return new Promise((resolve,rejected) =>{
        const resolveCondition = true;
        setTimeout(()=>{
            if(resolveCondition){
            resolve({data:{message:"result available"}})
        }
        else{
            rejected("Invalid COndition in promise")
        }},200)
        console.log("I am executed before promise resolved")
    });
}

console.log(returnPromise())

const res = returnPromise();