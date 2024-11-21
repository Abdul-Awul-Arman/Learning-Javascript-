class PersonClass {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    };
    intor = () => {

        console.log(`name is ${this.name} age is ${this.age} job is ${this.job}`);

    };
};


let arman = new PersonClass("abdulawularman", 22, "programmer");

arman.intor();

console.log("\n")


//inheritance

class TeacherClass extends PersonClass {
    constructor(name, age, job, subject) {
        super(name, age, job);
        this.subject = subject;
    }
}


let teacher = new TeacherClass("ahmed", 17, "hafiz", "quran");

console.log(teacher);

teacher.intor();





























