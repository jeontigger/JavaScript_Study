function sayHello(name, age){
    if(name == undefined)
        console.log("Hello!");
    else{
        console.log("Hello my name is " + name + " and I'm " + age);
    }
        
}



sayHello("inho", 26);
sayHello("sungwon", 23);
sayHello("dal", 21);
sayHello();

function plus(a, b){
    console.log(a + b);
}
function divide(a, b){
    console.log(a/b);
}
plus(8, 60);
divide(98, 20);

const player = {
    name: "inho",
    age: 26,
    sayHello: function(otherPersonsname){
        console.log("hello " + otherPersonsname + " nice to meet you!");
    }
};

console.log(player.name);
player.sayHello("lynn");