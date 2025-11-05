// let magicSum= 10;
// magicSum='sam';
// // aisi languages m jisme datatypes define krne ki jrurat nhi hoti unhe weakly typed language bolte hain.
// //aisi PL jinka datatype run time pr pta chlta h unhe Dynamically types PL kehte hain.

// console.log(magicSum);

//--------------------------------------------------------------------------------------------------------------------
// STRING METHODS

// 1. substr
let str;
str= 'vinay chaudhary';
// console.log(str);
// console.log(str.substr(2)); //second argument is included
// console.log(str.substr(-5,5)); // ye minus index peevhe se -1 se start hota h aur -5 pr pahuchne k baad code fir right side (string k end ki trf run hoga).

// --------------------------------------------------------------------------------------------------------------------------------------------------------
//2. subString Method

//   console.log(str.substring(2,5))

//  second argument included nhi hota range m.
// jab b starting point > ending point , to starting point and ending point aapas m swap ho jayenge
  // jab b (-5, 2) aise negative values deke rkhi hogi to vo (0,2) ho jaayega
  // jab dono (-2,-5) aayega to vo (0,0) ho jaayga , jisse empty return krega

//   ----------------------------------------------------------------------------------------------------------------------------------
//  3. indexOf

console.log(str.indexOf('a'));
console.log(str.indexOf('a',6));  // ye second aregument skip krdega yahan tk k indices ko , excluded hota h ye range m .

// -----------------------------------------------------------------------------------------------------------------------------
// replace
console.log(str.replace('a','y'));
console.log(str.replaceAll('a','#'))

// ------------------------------------------------------------
// repeat , isko use krne se jo hmari string vo repeat hoti rhegi.
console.log(str.repeat(3)); // output: vinay chaudahryvinay chaudharyvinay chaudhary