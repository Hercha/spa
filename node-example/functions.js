var myFunc = function(){
    console.log('Hello World!');
};

var foo = 5;

// module.exports = myFunc;

module.exports = {
    myFunc: myFunc,
    foo: foo
};

console.log(module);