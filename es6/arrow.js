    // lexical this 
    
    //below es5
    var obj={
        exmp:function(){
            console.log(this);
            return function (){
                console.log(this);
            }
        },
    };
    // obj.exmp()();


    // below es6

    // obj.exmp()();
    // var obj={
    //     exmp:()=>{
    //         console.log(this);
    //         return ()=>console.log(this);
    //     },
    // };

    // obj.exmp()();


    // below es 5 and es6 mix

    // obj.exmp()();
    var obj={
        exmp:function(){
            console.log(this);
            return ()=>console.log(this);
        },
    };

    console.log(obj.exm);

    obj.exmp()();