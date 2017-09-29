//console.log( 'Hello!' );

// var func = require( './functions' );
// func();
// console.log(func.foo);
// func.myFunc();
// console.log(module);

var util = require( 'util' );
console.log(util.format( 'Hello %s!', 'World' ));

var hapi = require( 'hapi' );