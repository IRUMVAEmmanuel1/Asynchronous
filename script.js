const returnPromise =()=>{
    return new Promise((resolve,rejected) =>{
        const resolveCondition = true;
        setTimeout(()=>{
            const res = fetch("https://restcountries.com/v3.1/name/{name}");
            resolve(res.then(r.json()))   
        
       },200)
       
    });
}

console.log(returnPromise())

const res = returnPromise();

res.then((response)=>{}).catch((err)=>{})