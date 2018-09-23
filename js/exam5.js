/**
 * Created by Angela on 2018/3/13.
 */
// for (var i = 0; i < 5; i++) {
//     setTimeout((function(i) {
//         console.log(i);
//     })(i), i * 1000);
// }


























for (var i = 0; i < 5; i++) {
    setTimeout((function(i) {
        console.log(i);
        return function () {};
    })(i), i * 1000);
}
