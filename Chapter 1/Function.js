// function ThisIsFunction(){
//     console.log("ThisIsFormFunction");
// }

// ThisIsFunction();

// var ThisIsFormFunction = function(){
//     console.log("ThisIsFormFunction");
// }

// ThisIsFormFunction();

// function fun(name,age){
    
//     function x(name2,age2){
//         console.log(`${name2} ${age2}`);
//     }
    
//     x(name,age);

//     return x;
// }

// var rtfun=fun("arman",21);

// rtfun();



// console.log(rtfun);

// rtfun("arman",23);e

function TheMag(arman){
    // name='x';
    arman.name="arfat";
    var name=arman.name;
    console.log(`welcome Mr.`+name);
    return function options(menu){
        console.log(`do you like `+  menu+` mr.`+name);
    }
}

// var name='arman';
var Object={
    name:"arman",
    age:23,
}



TheMag(Object) ('coffee');

console.log(Object.name);
