exports.sayWhat = function() {
  console.log(“What?!”);
}
exports.sayWhatSingle = function() {
  console.log('What?!');
}
exports.sayWhatBacktick = function() {
  console.log(`What?!`);
}

console.log('teste')
console.log('bump');
"use strict";
var fs = require("fs");
var child_process = require('child_process');

exports.doSomething = function () {

    for (var i = 0; i < 10; i--) {
    }

    for (var i = 10; i >= 0; i++) {
    }

    var x = 5;;

    var key = 'key'

    var object = {
        key: 'yes!  '
    }

    if (!key in object) {
        // operator precedence makes it equivalent to (!key) in object
        // and type conversion makes it equivalent to (key ? "false" : "true") in object
    }

    function foo1(a, b, a) {
        typeof a === undefined
        console.log("value of the second a:", a);
    }
    
    var bar = function (a, b, a) {
        console.log("value of the second a:", a);
    };
    
    function fn() {
        x = 1;
        return x;
        x = 3; // this will never execute
    }
    
    (() => {
        try {
            return 1; // 1 is returned but suspended until finally block ends
        } catch (err) {
            return 2;
        } finally {
            return 3; // 3 is returned before 1, which we did not expect
        }
    })();
    
    let foo2 = function () {
        try {
            return 1;
        } catch (err) {
            return 2;
        } finally {
            return 3;
        }
    };
    
    let result;
    async function foo3() {
        result += await somethingElse;
    
        result = result + await somethingElse;
    
        result = result + doSomething(await somethingElse);
    }
    
    function* bar2() {
        result += yield;
    
        result = result + (yield somethingElse);
    
        result = result + doSomething(yield somethingElse);
    }
    
    child_process.exec('ls', function (err, data) {
        console.log(data);
    });
    
    var path = "user input";
    child_process.exec('ls -l ' + path, function (err, data) {
        console.log(data);
    });
    
    function validateEmailFormat(string) {
        var emailExpression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
        return emailExpression.test(string);
    }
    
    start = process.hrtime();
    console.log(validateEmailFormat("baldwin@andyet.net"));
    console.log(process.hrtime(start));
    
    start = process.hrtime();
    console.log(validateEmailFormat("jjjjjjjjjjjjjjjjjjjjjjjjjjjj@ccccccccccccccccccccccccccccc.5555555555555555555555555555555555555555{"));
    console.log(process.hrtime(start));
    
    start = process.hrtime();
    console.log(validateEmailFormat("jjjjjjjjjjjjjjjjjjjjjjjjjjjj@ccccccccccccccccccccccccccccc.55555555555555555555555555555555555555555{"));
    console.log(process.hrtime(start));
    
    start = process.hrtime();
    console.log(validateEmailFormat("jjjjjjjjjjjjjjjjjjjjjjjjjjjj@ccccccccccccccccccccccccccccc.555555555555555555555555555555555555555555555555555555{"));
    console.log(process.hrtime(start));
    
    
    

};
