function displayError(o){displayError.numTimesExcecuted=3,console.log(o)}function pet(o,n){this.name=o,this.age=n}var person=function(){console.log("i am person!")};person.prototype.eat=function(o){console.log("i can eat"+o)},person.prototype.sing=function(o){console.log("i can sing"+o+"and so on")},person.prototype.sex=function(o){"boy"==o?console.log("i am boy"):"girl"==o?console.log("i am boy"):console.log("it must a Secret or you are unique angle")};var jan=new person;jan.eat("milk"),jan.sex(),console.log("======================================111");var angle=function(){console.log("i am angle")};angle.prototype={eat:function(){console.log("i am not eat in china,eat everything at other region")},sleep:function(){console.log("i am not sleep")},sex:function(){console.log("i can change any one i want")}};var Michael=new angle;Michael.sex(),Michael.sleep(),console.log("======================================222"),Function.prototype.method=function(o,n){this.prototype[o]=n};var badMan=function(){console.log("i am badMan hahaha")};badMan.method("do",function(){console.log("i do bad thing")}),badMan.method("sleep",function(){console.log("i am sleep at day")});var xiaoming=new badMan;xiaoming["do"](),console.log("======================================333"),Function.prototype.method=function(o,n){return this.prototype[o]=n,this};var kindPerson=function(){console.log("i am kind so i hava good name")};kindPerson.method("do",function(){console.log("i do anythings people like")}).method("sleep",function(){console.log("i am sleep at night,just kite hahha")});var i=new kindPerson;i["do"](),i.sleep(),console.log("======================================444"),function(){var o=1,n=2;console.log(o*n)}(),function(o,n){console.log(o*n)}(2,3);var baz=function(o,n){return console.log(o*n),o*n}(2,4),ba;!function(){var o=4,n=4;ba=function(){return console.log(o*n),o*n}}(),ba(),console.log("======================================555"),displayError.numTimesExcecuted=0,console.log(displayError.numTimesExcecuted),pet.prototype={getName:function(){return this.name},getAge:function(){return this.age}};var lili=new pet("lili",8),bill=new pet("bill",8);pet.prototype.getGreeting=function(){return"hi "+this.getName()+" !"},lili.displayGreeting=function(){console.log(this.getName())},lili.displayGreeting(),console.log(bill.getGreeting()),console.log("======================================666");