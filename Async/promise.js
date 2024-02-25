
    const aPromise = (control) =>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(control){
                    resolve();
                }
                else{
                    reject();
                }
                
            }, 3000);
        })
    }

    const aPromise2 = (control) =>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(control){
                    resolve();
                }
                else{
                    reject();
                }
                
            }, 3000);
        })
    }

    aPromise(true);
    aPromise2(true); 
 
    Promise.all(aPromise,aPromise2)
    .then(()=>{
        console.log('this is a successful promise');
    }).catch(()=>{
        console.log('this is a unsuccessful promise');
    })