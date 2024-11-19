// prototype_based_inheritance
var Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
};

Person.prototype.intro = function () {
    console.log(`${this.name} age is ${this.age} and job is ${this.job}`);
}

var arman = new Person("abdulawularman", 22, "Teacher");

arman.intro();
