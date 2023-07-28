const returnPromise =()=>{
    return new Promise((resolve,rejected) =>{
        const resolveCondition = true;
        setTimeout(()=>{
            const res = fetch("https://restcountries.com/v3.1/name/{name}");
            resolve(res.then((r)=res.json()))   
        
       },200)
       
    });
}

const res = returnPromise();
