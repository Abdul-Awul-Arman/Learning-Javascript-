    
    const asyncFun=(callback)=>{

            console.log("This form async");
            setTimeout(()=>{
                callback();
                console.log("this form setTimeout");
            },3000);

            console.log("This form async second")

        }

        function aFun(){

            console.log('This form winedow');
        }

        asyncFun(aFun);
        
        