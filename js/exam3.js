/**
 * Created by Angela on 2018/3/13.
 */
// 闭包是可访问上一层函数作用域里变量的函数，即便上一层函数已经关闭。
// 闭包使得函数拥有私有变量变成可能。
for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    })(i);
}

(function () {
    console.log(i);
})(i);

setTimeout(function () { console.log(0); },0);
setTimeout(function () { console.log(1); },1000);
setTimeout(function () { console.log(2); },2000);
setTimeout(function () { console.log(3); },3000);
setTimeout(function () { console.log(4); },4000);

