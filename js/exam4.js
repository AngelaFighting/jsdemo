/**
 * Created by Angela on 2018/3/13.
 */
for (var i = 0; i < 5; i++) {
    (function() {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    })(i);
}