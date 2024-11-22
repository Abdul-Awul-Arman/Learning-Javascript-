    var Person=function (name,age,){
        this.name= name;
        this.age= age;
        this.intro=function (){
            console.log(`${this.name} bron in ${2024-this.age}`);
        }
    };

    var arman=new Person("abdulawularman",22);

    arman.intro();

