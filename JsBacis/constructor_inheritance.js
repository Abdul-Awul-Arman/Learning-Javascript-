    var Person=function(name,age,job,subject){
        this.name=name;
        this.age=age;
        this.job=job;
        this.subject=subject;
    };

    var Teacher=function(name,age,job,subject,profession){
        Person.call(this,name,age,job,subject);
        this.profession=profession;
    }

    var sadiq=new Teacher("sadiq",24,"mualim","hafize","teacher");

    console.log(sadiq);