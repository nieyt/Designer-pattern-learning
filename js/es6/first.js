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

// 第一章总结
// JavaScript是弱语言，定义变量时可以不声明变量类型。
// 函数是一等对象，可以动态创建，所以你可以创建闭包。
// 对象和类都可以变化，可以在运行时变化
// 继承有两种：原型继承，类式继承
console.log("=====================第二章==================");
//注释接口
/*
interface Composite{
  function add(child);
  function remove(child);
  function getChild(index);
}
interface FormItem(){
    function save();
}
*/
var CompositeForm = function(id,method,action){
    console.log("id is "+id);
};
CompositeForm.prototype.add = function(child){
    console.log("add "+child);
};
CompositeForm.prototype.remove = function(child){
    console.log("remove "+child);
};
CompositeForm.prototype.getChild = function(index){
    console.log("get "+index+1+"类");
};
CompositeForm.prototype.save=function(){
    console.log("now you saved");
};
var my=new CompositeForm(1,2,3);
my.add("mychild");
// 比较推荐的写法
 var interface1 = function(name,methods){//创建接口
     console.log(arguments.length);
     // 入参数量不准确错误处理
     if(arguments.length !=2){
         throw new Error("interface constructor called whit"+arguments.length+"argument,but expected exactly 2.")
     }

     this.name = name;
     //给此时的接口依次添加写入的方法
     this.methods = [];
     for(var i=0,len = methods.length;i<len;i++){
         // 对参数数据类型做判断
         if(typeof methods[i]!=="string"){
             // 错误提示
            throw new Error("参数数据类型错误！");
         }
         this.methods.push(methods[i])
     }
     console.log(typeof this.methods[0])
 };
function getDate(date){
    console.log("your get "+date)
};
var getResults = function(){
    console.log("i don't know results");
};
var ResultSet =new interface1("ResultSet",["getDate","getResults"]);
// ResultSet.getDate("lucy");
//实际运用
var ResultFormatter = function(resultObject){
    if(!(resultObject instanceof TestResult)){
        throw new Error("error");
    }else{
        console.log("已成功调用接口");
    }

    this.resultObject=resultObject;
};
ResultFormatter.prototype.renderResults=function(){
    var dateOfTest = this.resultObject.getDate();
    var resultArray = this.resultObject.getResults();

    var resultsContainter = document.createElement("div");

    var resultsHeader = document.createElement("h3");
    resultsHeader.innerHTML= "test results from"+dateOfTest.toUTCString();
    resultsContainter.appendChild(resultsHeader);

    var resultItList = document.createElement("ul");
    resultsContainter.appendChild(resultItList);

    for(var i=0,len=resultArray.length;i<len;i++){
        var listItem = document.createElement("li");
        listItem.innerHTML=resultArray[i];
        resultsList.appendChild(listItem);
    }
    return resultsContainter;

};
console.log("wait..............!!!!!!");
console.log("==================第二章接口结束==============");



















