"use strict" // treat all jS code as newr version
// alert(3 + 3) // we are using nodejs. not browser


console.log("Hello World !")

let email = "yaya@blabla.com"
var password = "123456"
const id = 1234
// city = "Lahore" // it raise error because of : "use strict" 

// console.table([id, password, email, city])
// console.log(typeof(city))

// Data types :

// let a = 67 // bigint also
// let b = "Name"
// let is = true
// let v = null
// let no
// let symbol = "@"
// let o = [1,3,4]

// console.log(typeof null);// object
// console.log(typeof undefined);

//  Type conversion

let age = "12"
let text = "Text 1"
let n = null
let un = undefined
let bool = true

// console.log(typeof age);
// console.log(typeof text);
// console.log(typeof n);
// console.log(typeof un);
// console.log(typeof bool);


let num_converter = Number(age)
let text_converter = Number(text)
let null_converter = Number(n)
let undefined_converter = Number(un)
let bool_converter = Number(bool)

// console.log(typeof num_converter);
// console.log(typeof text_converter);
// console.log(typeof null_converter);
// console.log(typeof undefined_converter);
// console.log(typeof bool_converter);

// console.log(num_converter);
// console.log(text_converter);
// console.log(null_converter);
// console.log(undefined_converter);
// console.log(bool_converter);

let val = 1 // 0 is false

let boo = Boolean(val)

// console.log(boo);

let nums = 76678666

let str_converter = String(nums)

// console.log(str_converter, typeof str_converter);


//  Operations

let str1 = "Hello "
let str2 = "World"
let number = 5

let sum = str1 + str2
let sum2 = str1 + number

// console.log(sum);
// console.log(sum2);

// behaviour of Js

// console.log("3" + 2);
// console.log(2 + "3");
// console.log("3" + 2 + 9);
// console.log(2 + "3" + 7);
// console.log("3" * 2 + 2);
// console.log(2 + 6 + "3");
// console.log(+true);
// console.log(+"");
// console.log(0);

// console.log("2" == 2);
// console.log("2" === 2);

// console.log(null == 0);
// console.log(null > 0);
// console.log(null >= 0);
// it is true because of different behaviour of == and >,<,<=, etc

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);

// Primitive : 7 datatype : string, number, boolean, null, undefined, symbol, BinInt

const id1 = Symbol("123")
const id2 = Symbol("123")

// console.log(id1 == id2);
// console.log(id1 === id2);

// const bigint = 88777776500000000000005444343n
// console.log(bigint);

// Reference (non-primitive) : Arrays, objects, functions

const arr = [1, 2, 3, 4, 5, 6]
const data = {
    fname: 'Ali',
    age: 90
}
// console.log(data);
// console.log(arr);

let my_fun = function () {
    return console.log("in function ");
}

// console.log(typeof my_fun);


// console.log(60*"v");




// Stack (Primitive)

let name1 = 'Ali'
let name2 = name1
name2 = 'Salman'

// console.log(name1);
// console.log(name2);


// Heap (Non-primitive)

let myobj = {
    email: "hlohlo@blabla.com",
    upi: "user@123"
}

let myobj2 = myobj

myobj2.upi = "user2@1234"

// console.log(myobj);
// console.log(myobj2);


// String

const name = "Ali"

// console.log(`My name is ${name}`); // str interpration

const my = new String('Ali');

// console.log(my);

// console.log(my[0]);
// console.log(my.__proto__);
// console.log(my.length);
// console.log(my.indexOf("A"));
// console.log(my.toUpperCase());
// console.log(my.charAt(2));
// console.log(my.toLowerCase());
// console.log(my.replace("A","a"));
// console.log(my.endsWith("A"));
// console.log(my.startsWith("i"));

const newstr = my.substring(0, 2)
// console.log(newstr);

const myst = "JavaScript"

const anotherstr = myst.slice(-6, -1)

// console.log(myst.slice(-6));
// console.log(anotherstr);

let name_str = "   Zeeshan   "

// console.log(name_str);
// console.log(name_str.trim())

// console.log(name_str.includes("ee"));

let string1 = "Some people have curly brown hair through proper brushing"

// console.log(string1.split(" ",3));// 3 is limit





// numbers and math




const n1 = 989

// console.log(n1);

const balance = new Number(989)

// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(8));

const new_n = 98.0909

// console.log(new_n.toPrecision(4));

const hu = 10000000000000

// console.log(hu.toLocaleString());
// console.log(hu.toLocaleString('en-IN')); // shame for Pakistan en-Pa, en-PAK not exist

// console.log(hu.valueOf());


// console.log(Math)
// console.log(Math.abs(-5));
// console.log(Math.sqrt(25));
// console.log(Math.round(5.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.max(8,8,8,0,9,5));
// console.log(Math.min(8,9,0,-7,8));
// console.log(Math.round(Math.sin(90)));

// console.log(Math.random());
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor((Math.random() * 10) + 1));

const min = 20
const max = 80

// console.log(Math.floor((Math.random()* max - min + 1) + min));





// Date 




let myDate = new Date()

// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getTime());
// console.log(myDate.setTime(12));
// console.log(myDate.getMonth());


console.log();

let createddate = new Date(2026, 5, 11)

// console.log(createddate.getDate());
// console.log(createddate.toDateString());

createddate = new Date(2026, 5, 11, 2, 11)

// console.log(createddate.toLocaleString());

let new_date = new Date("11/5/2026, 2:19:45 PM")

// console.log(new_date.toLocaleString("11/5/2026, 2:19:45 PM"));

let date = new Date("11/5/2026, 2:39:45 PM")

date.toLocaleString("default", {
    weekday: 'long',
    timeZoneName: 'longGeneric'
})






// array




let arr1 = [1, 2, 3, 4, 5, 6, 7]

const arr2 = new Array(1, 2, 3, 4, 4, 5, 56)

// console.log(arr1[0]);



// methods



arr1.push(8)
arr1.push(9)
arr1.pop()
arr1.push(9, 10)

// console.log(arr1);

arr1.unshift(0)
// console.log(arr1);

arr1.shift()
// console.log(arr1);


// console.log(arr1.includes(7));
// console.log(arr1.indexOf(7));

let newarr = arr1.join()

// console.log(arr1);
// console.log(newarr);
// console.log(typeof newarr);

// console.log("A ", arr1);

let no_arr = arr1.slice(0, 3)

// console.log(no_arr);

// console.log("B ", arr1);

let my_arr2 = arr1.splice(0, 3)

// console.log(my_arr2);

// console.log("C ", arr1);

let heros1 = ["Spiderman", "Ironman", "Thor"]
let heros2 = ["Flash", "Superman", "Batman"]

// heros1.push(heros2)

// console.log(heros1);
// console.log(heros1[3]);
// console.log(heros1.length);

let all_heros = heros1.concat(heros2)

// console.log(all_heros);

let all_new_heros = [...heros1, ...heros2]
// console.log(all_new_heros);

let num_arr = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]], 11]

let array = num_arr.flat(2) // also use infinity

// console.log(array);

let array1 = num_arr.flat()

// console.log(array1);


// console.log(Array.isArray("Hello"));

// console.log(Array.from("Hello "));

// console.log(Array.from({greet :"Hello "}));

// console.log(Array.from({greet :"Hello "})); // important !

let score1 = 1
let score2 = 2
let score3 = 3

// console.log(Array.of(score1,score2,score3));






// objects



// singleton
// object.create // constructer method

// object literals




const mysym = Symbol("@")

const obj = {

    name: "Babar Azam",
    age: 31,
    email: "babarazam@blabla.com",
    location: "Lahore",
    isking: true,
    "Pakistani best player": true,
    // sym : "sym",//it is wrong way,
    [mysym]: "@",

}

// add value :

obj.greet = function () {
    // console.log(`Hello ${obj.name}`);// also write as
    console.log(`Hello ${this.name}`);

}

// cahnge value 

// obj.email = "babar.king@blabla.com"

// freeze object :

Object.freeze(obj)

// trying to change value :

// obj.name = "Virat Kholi" // causes error 

// console.log(obj);

// console.log(obj.isking);

// console.log(obj[isking]); key treated as str
// console.log("Babar is King ",obj['isking']);

// console.log(obj.Pakistani best player); // it generates error so we mostly use
// console.log(obj["Pakistani best player"]);

// console.log(obj.mysym);
// console.log(typeof obj.mysym);// we need to also chnage it

// console.log(obj[mysym]);

// console.log(obj.email);
// console.log(obj.name);
// console.log(obj);

// console.log(obj.greet());


// singleton objects

// const myobject = new Object() // singleton

const myobject = {} //  non singleton

myobject.id = "23#44%"
myobject.name = "User"
myobject.isloggedin = false

// console.log(myobject);

const new_user = {
    email: "user@blabla.com",
    full_name: {
        user_name: {
            fname: "Ali",
            lname: "Baba",
        }
    }
}

// console.log(new_user.full_name);
// console.log(new_user.full_name.user_name.fname);

const ob1 = { 1: "a", 2: "b" }
const ob2 = { 3: "a", 4: "b" }

// const ob3 = {ob1 , ob2}
const ob3 = { ...ob1, ...ob2 }
// const ob3 = Object.assign({},ob1,ob2)

// console.log(ob3);


const users = [
    {
        id: "12dd#4",
        email: "a@blabla.com",
    },
    {
        id2: "1$5d#4",
        email2: "b@blabla.com",
    },
    {
        id3: "12[h#4",
        email3: "c@blabla.com",
    },
]

// console.log(users[0]);

// console.log(Object.keys(myobject));
// console.log(Object.values(myobject));
// console.log(Object.entries(myobject));
// console.log(myobject.hasOwnProperty("name"));





// Strucrtures


const course = {
    coursename: "Js Course",
    price: 999,
    courseinstructor: "Babar Azam",
}

const { courseinstructor: Instructor } = course
// console.log(Instructor);



// json : java script object notation 

// {
//     "name" : "Js Course",
//     "Constructor" : "Babar Azam",
//     "price" : 233
// }

// [
//     {},
//     {},
//     {},
// ]





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
// functions






// defined with keyword function

function name_shower() {
    console.log(`BABAR`);
}

// name_shower()

function adder(n1, n2) {
    console.log(n1 + n2);
}

// adder(3,9)
// adder("5",9)
// adder("a",9)
// adder(null,9)

// const result = adder(3,9)
// console.log(result);// because we return nothing 

function adder2(n1, n2) {
    return n1 + n2
}

const result2 = adder2(3, 9) // it prints nothing
// console.log(result2);

function loggedin(username = "User") {
    return `${username} just logged in`
}

// console.log(loggedin("Babar"));
// console.log(loggedin(""));
// console.log(loggedin());

function cartItems(val1 = 1, ...num) {
    return num
}

// console.log("Cart Item prices are  : ",cartItems(3,4)); // the function accept only first if you write only 1 parameter
// console.log(cartItems(5,8,9,9)); // we cann't give a default value to ...parameter 

const anyobj = {
    name: "BABAR",
    age: 31,
}

function obj_handler(anyobj) {
    return `Name is ${anyobj.name} and I am ${anyobj.age} old.`
}

// console.log(obj_handler(anyobj));
// Same as
// console.log({
//     name : "Babar",
//     age : 32
// });

const any_arr = [1, 2, 3, 4, 5]

function second_value(getArray) {
    return getArray[1]
}

// console.log("Second value in array is ", second_value(any_arr));
// same as
// console.log("Second value in array is ", second_value([1,2,3,4,5]));





// Scope :


// let a1 = 2
// const a2 = 3
// var a3 = 4

// console.log(a1);
// console.log(a2);
// console.log(a3);


// if (true) {
//     let a1 = 2
//     const a2 = 3
//     var a3 = 4
// }

// console.log(a1);
// console.log(a2);
// console.log(a3); // it runs 




// by level 0, lec 1

// console.log(x);
var x = 1

// console.log(y);
let y = 1

// console.log(z);
const z = 1


function one() {
    const name = "BABAR"

    function two() {
        const website = "devweekends"
        console.log(name);

    }
    two()
    // console.log(website); // reference error

}

// one()


// 1

// console.log(addone(5));

function addone(num = undefined) {
    return num + 1
}

// 2

// addtwo()



// expression function


const addTwo = function addtwo(num) {
    return num + 2
}





// this keyword


const user = {
    username: "BABAR",
    price: 837,

    welcome_message: function () {
        console.log(`${this.username} welcome to website.`);
        // console.log(this);


    }
}

// user.welcome_message()
user.username = "Sam"
// user.welcome_message()


// console.log(this);

// function this_func(){
//     let username = "sam"
//     console.log(this.username);

// }

// this_func()




// Arrow Function


// const chai = () => {
//     let username = "BABAR"
//     console.log(this.username);

// }

// chai()


// const sum_of_two_no = (n1 = 1, n2 = 1) => {
//     return n1 + n2
// }

// same as 

// const sum_of_two_no = (n1 = 1, n2 = 1) => n1 + n2

// const sum_of_two_no = (n1 = 1, n2 = 1) => (n1 + n2)  // it is used when we need to return object

const sum_of_two_no = (n1 = 1, n2 = 1) => ({ username: "BABAR" })

    // console.log(sum_of_two_no(5,7));





    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // IIFE : Immediately invoked function expression

    // something() is not running in vs codespace

    (function something(n) {
        // named IIFE
        console.log(`${n}. Connected`);
    })(1);


// ( () => {
//     // Simple IIFE
//     console.log("2. Connected");
// })();


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Control Flow

// if

let text2 = "Hello"

if (text2 == "Hello") {
    // console.log("true");
}


if (2 === "2") {
    console.log("2 === '2'");
} else if (2 == "2") {
    // console.log("2 == '2'");
} else {
    console.log("false");
}

// not recommended : shorthand way

let bill = 3844

// if (bill > 3000) console.log("Billllllll....1"),console.log("Billllll...2");



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==

// Switch

const month = 7

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        // console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

    default:
        console.log("default");
        break;
}



// falsy values :  "", 0, null, undefined, BigInt 0n, -0, NaN, false
// truthy values : All values other then above consider as true 


// Nullish Coalescing Operator (??) : null , undefined

let val_1
val_1 = 5 ?? 10

// console.log(val_1);

// important !

let val_2
val_2 = null ?? 6

// console.log(val_2);


let val_3
val_3 = null ?? undefined

// console.log(val_3);


let val_4
val_4 = null ?? undefined ?? 7

// console.log(val_4);



// Ternary Operator 

// condition ? true : false 

const age_of_person = 17

// age_of_person < 0 ? console.log("Invalid Age") : console.log(`Your age is ${age_of_person}`);




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// loop

// for loop

for (let i = 0; i <= 5; i++) {
    // console.log(i);
}

// while loop

let i = 1

while (i <= 5) {
    // console.log(i);
    i++
    // console.log(i)
}
// console.log(i);


// do while loop

let j = 10

do {
    // console.log(j);
    j++
} while (j > 50);





// for of



const arr_num = [1, 2, 3, 4, 5]

for (const i of arr_num) {
    // console.log(i);
}

const str = "One of the most popular programming languages in the world, JavaScript is a must-have for web development. It allows you to create interactive and dynamic websites, making it an essential skill for any aspiring web developer.".split(" ")

for (const i of str) {
    // console.log(i);
}

const map = new Map()

map.set('name', "Babar Azam")
map.set('age', 30)
map.set('isking', true)

// map.set(name, "Babar Azam")
// map.set(age, 30)  // if you don't use string as key then it is treated as variable (if exist : put its value otherwise raise error)



// console.log(map);

// for (const key of map) {
//     console.log(key);
// }



// it is working

// for (const [key,values] of map) {
//     console.log(key," :- " ,values);
// }

const game = {
    game1 : "Cricket",
    game2 : "Football",
    game3 : "Hockey",
}

// obj not iterable but we can use for in loop

// for (const [key,value] of game) {
//     console.log(key, value);
// }







// for in loop



const shortforms = {
    js : "JavaScript",
    html : "Hyper Text Markup Language",
    css : "Cascading Style Sheet",
    py : "Python",
    cpp : "C++",
    rb : "Ruby",
    java : "Java",
    cs : "C#",
}

for (const key in shortforms) {
    // console.log(key ,"is a shortform of", shortforms[key]);   
}

console.log();


const programming_languages = ["JavaScript", "Python", "C++", "Java", "Ruby","C#","C"]

for (const i in programming_languages) {
    // console.log(i, programming_languages[i]);
}

const map_new = new Map();

map_new.set("name", "Babar Azam")
map_new.set("age", 30)
map_new.set("isking", true)

// map is not iterable so we dont use it in for in loop

// for (const key in map_new) {
//     console.log(key, map_new[key]);
// }





// foreach()




const coding = ["js","python","java","ruby","C","C#","C++"]

// 1.

// coding.forEach(function (items) {
//     console.log(items);
// });

// 2.

// coding.forEach( (names) => {
//     console.log(names);
// });

// 3.

// function PrintMe(names) {
//     console.log(names);
    
// }

// coding.forEach(PrintMe)



coding.forEach( (items, index, arr) => {
    // console.log(items, index, arr);
})




const myjson = [
    {
        language : "Js",
        extension : ".js",
    },
    {
        language : "Python",
        extension : ".py",
    },
    {
        language : "C",
        extension : ".c",
    },
    {
        language : "HTML",
        extension : ".html",
    }
] 

myjson.forEach( (items) => {
    // console.log(items.language, items.extension);
})




const foreach = myjson.forEach( (items) => {
    // console.log(items.language, items.extension);
    // return items.language, items.extension  // it returns nothing
})

// console.log(foreach);






// ++++++++++++++++++++++++++++++++++
// filter




const numbers = [1,2,3,4,5,6,7,8,9,10]


const NewNumber = numbers.filter( (num) => (num > 5) )
// console.log(NewNumber);

const NewNumber2 = numbers.filter( (num) => {
    // num > 5
    return num > 5
} )

// console.log(NewNumber2); // it if we use {} then we need t return value otherwise it returns []



// by forEach loop

const empty_arr = []

numbers.forEach( (num)  =>  {
    if(num > 5){
        empty_arr.push(num)
    }
})

// console.log(empty_arr);




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const BooksData = books.filter( (book) => (book.genre == "Science"))

// console.log(BooksData);



const PublishData = books.filter( (date) => { return date.publish >= 1998 && date.genre === "History"})

// console.log(PublishData);



// +++++++++++++++++++++++++++++++++++++=
// map


const square = numbers.map( (num) => num**2) // if open scope{} then we need to return it
// console.log(square);






// chaining


const nothing = numbers.map( (n) => n + 10 ).map( (num) => num - 10 ).filter( (n, index) => n >= numbers[index])

// console.log(nothing);






// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// reduce


const short_arr = [1,2,3]

const reduce = short_arr.reduce( (acc,current_val) => {
    // console.log(`acc : ${acc} and current value : ${current_val}`);
    return acc + current_val
}, 0)


// console.log(reduce);



const shoppingCart = [
    {
        courseName : "Python for all levels",
        price : 3399
    },
    {
        courseName : "C++ for all levels",
        price : 3099
    },
    {
        courseName : "Java for all levels",
        price : 3219
    },
    {
        courseName : "Js for all levels",
        price : 3809
    },
]

const total = shoppingCart.reduce( (acc, item) => acc + item.price,0)

// console.log(total);













// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// DOM



// it need html file

