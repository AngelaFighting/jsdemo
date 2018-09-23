/**
 * Created by Angela on 2018/4/29.
 */

//this是Javascript语言的一个关键字。它代表函数运行时，
// 自动生成的一个内部对象，只能在函数内部使用
//this指的是，调用函数的那个对象。

//this的用法:

//情况一：纯粹的函数调用
//这是函数的最通常用法，属于全局性调用，因此this就代表全局对象Global。

function test1(){
    this.x = 1;
    console.log(this.x);
}
test1(); // 1

//情况二：作为对象方法的调用
//函数还可以作为某个对象的方法调用，这时this就指这个上级对象。

function test2(){
    console.log(this.x);
}
var o2 = {};
o2.x = 2;
o2.m = test2;
o2.m(); // 2

//情况三：作为构造函数调用
//所谓构造函数，就是通过这个函数生成一个新对象（object）。
// 这时，this就指这个新对象。

function test3(){
    this.x = 3;
}
var o3 = new test3();
console.log(o3.x); // 3

//情况四：apply调用
//apply()是函数对象的一个方法，它的作用是改变函数的调用对象，
// 它的第一个参数就表示改变后的调用这个函数的对象。
// 因此，this指的就是这第一个参数。

var y = 0;
function test4(){
    console.log(this.y);
}
var o4={};
o4.y = 1;
o4.m = test4;
o4.m.apply(); //0

//apply()的参数为空时，默认调用全局对象。
// 因此，这时的运行结果为0，证明this指的是全局对象。

// 如果把最后一行代码修改为
o4.m.apply(o4); //1
// 运行结果就变成了1，证明了这时this代表的是对象o4。

