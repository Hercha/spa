// var hello = require( './functions.js' );
// hello();

// const foo = 'Helloo';
//foo = 5;
// let bar = 20;

// console.log(foo);
// console.log(bar);

// function hello(){
//     console.log('Hello!');
// }
// hello();

// var hello2 = () => console.log('Hi!');
//  hello2();

//  var hello3 = (param1) => {
//      console.log(param1);
//  }
//  hello3('Hej!');

//  var foo = {
//      prop1: 11,
//      prop2: function () {
//          console.log(this.prop1);
//      }
//  };

// foo.prop2();

//  var foo2 = {
//     prop1: 21,
//     prop2: () => {
//         console.log(foo2.prop1);
//     }
// };

//  foo2.prop2();

// import hello from './functions';
// hello();

// import foo from './functions';
// foo();

// import { num as custom_name} from './functions';
// console.log(custom_name);

// import hello, { num } from './functions';
import { hello, num } from './functions';
hello();
console.log(num);

// const obj = {
//     prop1: 5,
//     prop2: 100
// };

//const prop2 = obj.prop2;
// const { prop1, prop2 } = obj;

// console.log( obj.prop2 );
// console.log( prop2 );