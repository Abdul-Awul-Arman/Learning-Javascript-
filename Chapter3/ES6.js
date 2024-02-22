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

    // const aObject={
    //     AnotherObject:{
    //         ThirdObject:{
    //             title:"this is title",
    //         },
    //     },
    // }

    // const {AnotherObject:{ThirdObject:{title:thisIsNewTitel}}}=aObject;

    // console.log(thisIsNewTitel );


    // const arry=[1,2,3,4,5,6,7,8,9,10];
    // const arry2=[10,20,30,40,50,600,70,80,90,100];

    // let result=[...arry,...arry2];
    // console.log(result);


    // let fun=(a,b,c,d,f)=>{
    //     let sum=(a+b+c+d+f);
    //     console.log(sum);
    // }

    // fun(arry);

//    const x=(...rest)=>{


//       for(var i=0;i<rest.length;i++)
//       {
//         console.log(rest[i],i);
//       }
//    }



//    x(1,2,3);


    // class Class{
    //     name;
    //     roll;
    //     age;

    //     constructor(name,roll,age){
    //         this.name=name;
    //         this.roll=roll;
    //         this.age=age;
    //     }
    // }


    // const NewObject= new Class('arman',1,32);

    // console.log(NewObject.name);


    // const aMap= new Map();

    // aMap.set('FullName','AbdulAwulArman');
    // aMap.set('Friend1','AbdurRahman');
    // aMap.set('Friend2','Ahmed');
    // aMap.set('Friend3','Sadik');
    // aMap.set('Friend4','Sabbir');
    // aMap.set('Friend5','Nur');
    // aMap.set('Friend6','Nur');

    // let result=aMap.get('Friend1');
    // aMap.delete('FullName','AbdulAwulArman');
    
    // let result=aMap.has('FullName');

    // aMap.clear();

    // console.log(aMap);

    // aMap.forEach((Property,Key)=>{
    //     console.log(`This is ${Property} and This is ${Key}`)
    // })
     
    // const aFun= function fun(Name,age){

    //     Name? Name=Name:Name='AbdulAwulArman';
    //     age? age=age:age=30;

    //     console.log(Name,age);

    // }


    // aFun('Somrat',31);


    // const aFun= function fun(Name='AbdulAwulArman',age=21){

    //     console.log(Name,age);

    // }


    // aFun('Somrat',31);

    // const aFun= function fun(Name='AbdulAwulArman',age=21){
    //     this.Name=Name;
    //     this.age=age;
    //     console.log(Name,age);

    // }


    // const aObject= new aFun('Arman',31);


    // console.log(aObject.Name);


    // class aClass{
    //     constructor(Name,Age,Roll){
    //         this.Name=Name;
    //         this.Age=Age;
    //         this.Roll=Roll;
    //     }
        
        // aFunction =(Name,Roll,Age)=>{
        
        //     console.log(`My Name Is ${this.Name} and my roll is ${this.Roll} and My age is ${this.Age}`);
        // }

    // }


    // const aObject= new aClass('Abdulawularman',21,100)
    // // aObject.aFunction();

    // aClass.prototype.FullDet=function(){
    //     console.log(this.Name);
    // }

    // aObject.FullDet();


    // class ClassOne{
    //     constructor(name,roll,age){
    //         this.name=name;
    //         this.roll=name;
    //         this.age=name;
    //     }

    //      FullDetails(){
    //         console.log(`This is name ${this.name} This is roll ${this.roll} This is name ${this.age}`)
    //     }
    // }



    // class ClassTow extends ClassOne{

    //     constructor(name,roll,age,subject,FullDetails){

    //         super(name,roll,age,FullDetails);
    //         this.subject=subject

    //     }
        
    // }


    // const aObject= new ClassTow('arman',20,21,'pro')


    // aObject.FullDetails();

