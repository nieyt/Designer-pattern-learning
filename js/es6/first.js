/**
 * Created by Administrator on 2017/5/18.
 */
// console.log(11111);
//第一章灵活的JavaScript
var person=function(){
    console.log("i am person!");
};
person.prototype.eat=function(thing){
    console.log("i can eat"+thing);
};
person.prototype.sing=function(songs){
    console.log("i can sing"+songs+"and so on");
};
person.prototype.sex=function(sex){
    if(sex=="boy"){
        console.log("i am boy");
    }else if(sex=="girl"){
        console.log("i am boy");
    }else{
        console.log("it must a Secret or you are unique angle");
    }
};
var jan=new person();
jan.eat("milk");
jan.sex();
console.log("======================================111");
//这样可能显得有点乱，也可以这样写
var angle=function(){
    console.log("i am angle")
};
angle.prototype={
    eat:function(){
        console.log("i am not eat in china,eat everything at other region");
    },
    sleep:function(){
        console.log("i am not sleep");
    },
    sex:function(){
        console.log("i can change any one i want");
    },
};
var Michael=new angle();
Michael.sex();
Michael.sleep();
console.log("======================================222");
//另一种代码风格
Function.prototype.method=function(name,fn){
    this.prototype[name]=fn;
};
var badMan=function(){
    console.log("i am badMan hahaha")
};
badMan.method("do",function(){
    console.log("i do bad thing");
});
badMan.method("sleep",function(){
    console.log("i am sleep at day")
});
var xiaoming= new badMan();
xiaoming.do();
console.log("======================================333");
//再另外一种实现方式 ☆
Function.prototype.method=function(name,fn){
    this.prototype[name]=fn;
    return this;//使得可以链式调用
};
var kindPerson=function(){
    console.log("i am kind so i hava good name");
};
kindPerson.method("do",function(){
    console.log("i do anythings people like");
}).method("sleep",function(){
    console.log("i am sleep at night,just kite hahha");
});
var i=new kindPerson();
i.do();
i.sleep();
console.log("======================================444");
//总结：JavaScript很灵活，具体采用那种编写方式可以随自己喜好和工作实际需求作出选择.

// 函数是一等对象
(function(){
    var foo =1;
    var bar=2;
    console.log(foo*bar);
})();

(function(foo,bar){
    console.log(foo*bar);
})(2,3);

var baz=(function(a,b){
    console.log(a*b);
    return a*b;
})(2,4);

var ba;
(function(){
    var foo=4;
    var bar=4;
    //闭包☆
    ba=function(){
        console.log(foo*bar);
        return foo*bar;
    };
})();
ba();
console.log("======================================555");
//对象的易变性
function displayError(message){
    displayError.numTimesExcecuted=3;
    console.log(message);
}
displayError.numTimesExcecuted=0;
console.log(displayError.numTimesExcecuted);

function pet(name,age){
    this.name=name;
    this.age=age;
}
pet.prototype={
    getName:function(){
        return this.name;
    },
    getAge:function(){
        return this.age;
    }
};
var lili =new pet("lili",8);
var bill =new pet("bill",8);
pet.prototype.getGreeting=function(){
    return "hi "+this.getName()+" !";
};
lili.displayGreeting=function(){
    console.log(this.getName());
};
lili.displayGreeting();
console.log(bill.getGreeting());
console.log("======================================666");
//总结 在对象声明之后，利用prototype给对象进行扩展属性，已声明对象仍可以使用新属性；





















