// let name='arman';
// let age=32;

// let full=(`My name is ${name} and my age is ${age}`);

// console.log(full);



// let fun = (string,name, age) => {
    


//     console.log(string);
//     console.log(name);
//     console.log(age);
// };

// let name='arman';
// let age=30;



// fun`this is arman ${name}${age}`;
    // let q="this is aramn";

    // const result=q.startsWith('r');
    // console.log(result);

    // let q="this is arman";

    // const result=q.endsWith('n');
    // console.log(result);

    

    // let q="this is arman";

    // const result=q.includes('i');
    // console.log(result);

    // let q="this is arman  ";

    // const result=q.repeat(5);

    //  console.log(result);

    // let q="this is arman  ";

    // const result=q.repeat(5);

    //  console.log(result);

    // const aFunc=()=>console.log('this is form func');
    // aFunc();
    
//     const lex5={
//         name:'arman',
//         fun:function(){
//             console.log(this);
//         },
//     }

//   lex5.fun();


//    const arr=["arman","araft","somrat","mashrafe"];

//    const[first,second,third,fourth]=arr;

//    console.log(first,second,third,fourth);


//   const aObject={
//     aFunc:()=>{
//         console.log(this)

//         let fun2 =()=>{
//             console.log(this);
//         }
//         return fun2;

//     },
//     Oname:'first function',
//   }

//    let result=aObject.aFunc();

//    result();
  

    // const arr=[1,2,3,4,5,6,7,8,9,10];

    // let value,index;

    // const result=arr.find(function(CurrentValue,CurrentIndex,Mainarr){
         
    // })

    // console.log(value,index);

    // const arr=[1,2,3,4,5,6,7,8,9,10];

    // const result=arr.filter(function(CurrentValue){
    //     return CurrentValue>5
    // })

    // console.log(result);

    // const arr=[1,2,3,4,5,6,7,8,9,10];


    // let result=arr.slice(-4,-1);
    // console.log(result);


    // const arr=[1,2,3,4,5,6,7,8,9,10];

    // let result=arr.splice(-1,3,11,30,40);

    // console.log(arr);


    // const arr=[1,2,3,4,5,6,7,8,9,10];
    // const arr2=[1,2,3,4,5,6,7,8,9,10];
    // const arr3=[1,2,3,4,5,6,7,8,9,10];

    // let result=arr.concat(arr2,arr3);

    // console.log(result);

    // const arr=[1,2,3,4,5,6,7,8,9,10];

    // let result=arr.map(function(value){
    //    return value*2;
    // })

    // console.log(result);

    // const arr=[1,2,3,4,5,6,7,8,9,10];


    // const sum=arr.reduce(function(preValue,currentValue,currentIndex,){
    //     return preValue+currentValue;
    // },0)

    // console.log(sum);


    // const aObject={
    //     name:'arman',
    //     age:32,
    //     hobby:'reding',
    // };

    // let {name,age,hobby}=aObject;

    // console.log(name,age,hobby);

    const aObject={
        AnotherObject:{
            ThirdObject:{
                title:"this is title",
            },
        },
    }

    const {AnotherObject:{ThirdObject:{title:thisIsNewTitel}}}=aObject;

    console.log(thisIsNewTitel);







