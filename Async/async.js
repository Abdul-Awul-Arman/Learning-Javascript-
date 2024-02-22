    function aFun(){

        console.log('This form winedow');
    }


    const asyncFun=()=>{

            console.log("This form async");
            setTimeout(()=>{
                aFun();
                console.log("this form setTimeout");
            },3000);

            console.log("This form async second")

        }

        asyncFun();
        
        