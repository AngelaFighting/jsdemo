/**
 * Created by Angela on 2018/4/29.
 */
// 理解闭包
// 闭包是可访问上一层函数作用域里变量的函数，即便上一层函数已经关闭。
// 闭包使得函数拥有私有变量变成可能。

var name = "The Window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        return function(){
            return this.name;
        };

    }

};

console.log(object.getNameFunc()());// The Window

var object2 = {
    name : "My Object",

    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name;
        };

    }

};

console.log(object2.getNameFunc()());// My Object
