/**
 * Created by Angela on 2018/3/13.
 */
// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000 * i);
// }

var i;
for(i=0;i<5;i++){
    setTimeout(function () {
        console.log(i);
    },1000*i);
}
i=5;

setTimeout(function () { console.log(i); },0);
setTimeout(function () { console.log(i); },1000);
setTimeout(function () { console.log(i); },2000);
setTimeout(function () { console.log(i); },3000);
setTimeout(function () { console.log(i); },4000);