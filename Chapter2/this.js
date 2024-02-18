// function fun (){

//     console.log(this);
// }

// fun();

// function func(){

//     "use strict"
//     this.name="arman";
// };

// func();


// console.log(name);


var Myobject = {
  name: 'arman',
  roll: 21,
  AnotherObject: {
    name:'amran',
    value: function(){
      console.log(this);
    }
  },

  }

  // Myobject.AnotherObject.value();
  Myobject.AnotherObject.value.call(Myobject );


// console.log(this);