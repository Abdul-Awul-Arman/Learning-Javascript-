let abdulAwulArman = {
    name: "abdulawularman",
    age: 22,
    religion: "islam",
    futureWife: {
        name: "unknow",
        age: 15,
        religion: "islam",
        skill: ["hafiza", "beautiful"]
    }
}


// let { name: name6, age: age6, religion: religion6, futureWife: futureWife6 } = abdulAwulArman;

let { futureWife: { skill:[skill1,skill2] } } = abdulAwulArman;


console.log(skill1);