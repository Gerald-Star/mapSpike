//map method

const array1 = [1, 2, 3, 4, 5]
//pass a function to map
const map1 = array1.map(x => x * 2)
const map2 = array1.map(x => x * 4)
console.log(map1)
console.log(map1.length)
console.log(map2)
console.log(map2.length)



//objects and Arrays 
var car = {
    color: 'red',
    speed: 200,
    brand: 'BMW',
    drive: function(){return 'drive';}

}
console.log(car)

var shoppingList = [
    'Apple', 
    'Orange',
    'Pear'
];

console.log(shoppingList)

//Embedded Objects and Arrays
//Objects contain objects.
//Arrays can contain obkects and objects can contain arrays

var sportsCar = {
    best: 'Kia',
    make: 'Volvo',
    speed: 160,
    engine: {
        size: 2.0,
        make: 'BMW',
        fuel: 'petrol',
        pistons: [{maker1: 'BMW'}, {maker2: 'Mercedez'}]
    },
    move: function(){
        return 'drive';
    }
};
console.log(sportsCar)

console.log(sportsCar['best'])

console.log(sportsCar.make)
console.log(sportsCar.move())
console.log(sportsCar.move) 
console.log(sportsCar[4]) // not an array element



//without the paranthesis prints just the function syntax
console.log(sportsCar.engine)
console.log(sportsCar.engine.fuel);
console.log(sportsCar.engine.size)
console.log(sportsCar.length) // undefined bcs 
//you can't check the lenght of an object like an array.
console.log(sportsCar.engine.pistons) 
console.log(sportsCar.engine.pistons[0])
console.log(sportsCar.engine.pistons[0].maker1) 
console.log(sportsCar.engine.pistons[1])
console.log(sportsCar.engine.pistons[1].maker2)
console.log(sportsCar.engine.pistons.length) 
// piston here is an array. Length is 2

//objects the function is given a name for it to be a method.

//but in arrays, the function is seen as an element
//because no name is given to function in an array

//To assign a new value to make in car.

sportsCar.make = 'Nissan';
console.log(sportsCar.make)

//Concatenation with assignment operator

sportsCar.make += 200;
console.log(sportsCar.make) // Nissan 200

sportsCar.speed *= 2;
console.log(sportsCar.speed) //increase the speed 360


sportsCar['best'] += 170;
console.log(sportsCar.best) // Kia 170

sportsCar.engine = {newEngine: 'new', tyre: 'brandNew'}
console.log(sportsCar.engine)

//To add a new variable propeety and value

sportsCar.model = 'v60';
console.log(sportsCar.model)
// it nows adds the new property and value model : v60

sportsCar.color 
console.log(sportsCar.color) // will be undefined becasue no value is ássigned to it.

//To create a new variable for a new function
sportsCar.stop = function () {
    return ' stop';
}

console.log(sportsCar.stop) // this creates a new function methid stop


//HOW TO DELETE AN OPERATOR/ Object
delete sportsCar.color
console.log( delete sportsCar.color)

delete sportsCar.man
console.log( delete sportsCar.man)

delete sportsCar.engine
console.log( delete sportsCar.engine)
// when it deletes it runs true, when it did not it runs false

// To delete an object use the snytax delete






//ARRAYS MODIFICATION


//array inisde arrays
let a = 10;
 var arrays = [
    'strings',
    100,
     {speed: 200, car: 'fold'},
    ['embed', 100],
    function(){
        return 'drive';
    }
 ];

 console.log(arrays)
 console.log(arrays.length)
 console.log(arrays[2])
 console.log(arrays[2].speed)
 console.log(arrays[2].car)



 console.log([a - 5 - 2])
 console.log(arrays[3])
 console.log(arrays[3][0])

 console.log(arrays[4])

 //ARRAYS MODIFACTIONS

arrays[0] = 'new strings'
 console.log(arrays[0]) // adds new string as 0 in array

 arrays[0] += ' man'
 console.log(arrays[0])

 arrays[1] *= 3;
 console.log(arrays[1])

 arrays[6] = 'woman'
 console.log(arrays[6])


 // To delete the first element in array
//  array1.shift()
 console.log(arrays.shift()) // new strings man is deleted

 console.log(arrays.pop()) // removes the last element
 // woman is removed.

 //To add/ insert new element at the beginning of an array
 console.log(arrays.unshift('welcome', 20))
 //added this values at the first value and return the lenght

//To add an element at the end of an array
console.log(arrays.push('Orlu', 'Umuaka', 200))

 // the function in arrays gives anonymous because no name is given
 //but in function the name given to function as a method help
 // to describe the method of the function move




 //HOW TO USE ARRAY.SPLICE TO DELETE ELEMENTS IN ARRAY

 var arr = [
    'Country',
    400,
     {speed: 200, car: 'fold'},
    ['embed', 100],
    function(){
        return 'drive';
    }
 ];

 console.log(arr)
 console.log(arr.splice( 2, 2 ))// this deletes two elements

 var arr1 = [
    'Germany',
    300,
    'world',
    'Africa',
     {velocity: 200, brand: 'fold'},
    ['embed', 500],
    function(){
        return 'drive';
    }
 ];
//  console.log(arr1.splice())
 console.log(arr1.splice( 2, 2,  'man', 'woman'))
 console.log(arr1.splice( 1, 1,  'son'))


//  console.log(arr1.splice( 1, 0, 'Emeka', 'Man', 200, 100))



//CALL OBJECTS in Function methods
//calling function objects

function name1 () {
    var fullname = 'Lawrence';
    return fullname;
}

//call the function
name1();
console.log(name1());

//calling objects nested insided one another.
//you can imbed arrays inside an object, objects inside an array
//nesting a function insde another function- method
function name2 () {
    var fullname = 'Akpams';

    function concat(name2){
        return 'Mr.' + name2;
    }
    return concat(fullname);
}

name2()
console.log(name2())
//Mr. Akpams -using the function method

//2

function name3() {
    var country = 'United States';

    return country + ' of America';
}

name3();
console.log(name3())
//United States of America



// 3

function university() {
    var city = 'Boston';

    function cityName (university) {
        return 'University of ' + university;
   
    }

    return cityName(city)

}

university();
console.log(university());
//University of Boston.


//4

function name4(fullname) {
    return fullname.firstname + fullname.lastname;
}

console.log(
    name4({firstname: 'John', lastname: ' Mann'}));

    //John Mann

function wish() {

    var goal = 'Work in';

    function wishName (goal) {
        return goal + ' USA' + ' in ' + '2023';
    }
    return wishName(goal)
}

wish()
console.log(wish());

//HOISTING IN JS/ MEMORY HOISTING
//This refers to names that are stored in values for memory.

//Ex. the Git Compiler. Like the git compiler lexically read 
// through your ConvolverNode. Reading each of every ConvolverNode, looking
// for syntax error, symbol names.ConvolverNodeIt takes this single name and hoist them.
// It takes reading this code line by line.

//function is a calling object.
//How to hoist in function decalrations

// console.log(myName2, printName1()),

// var myName2 = 'Chima';

// function printName1() {
//      return 'Ukwuoma';
//  }
// function here is hoisted by returning a variable
// calling both like this will return undefined.


var myName1 = 'Chima'

function printName() {
  return 'Ukwuoma';
}

console.log(myName1, printName())

//calling the function and var like this will retuen an output
//Chima Ukwuoma

//IMPORTANT- JS reads through execution context
console.log(myName3, printName3())

var myName3 = 'Ukwuoma'

function printName3() {

    console.log(a)

    var a = 100;

    return 'Chima'
}
//undefined Chima
// the var memory pointer is not hoisting anything
//when trying to call a symbol that does not exist it shows undefined and not error

// console.log(printName3())



//TOPIC SCOPE AND CLOSURES


//SCOPES means Access on the callable abjects
//Objects in program has scopes- access to an object
//Example

var engine = {
    maker: 'Ford',
    headGasket: {
        pots: [
            'pistons1',
            'pistons2'
        ]
    }
}

console.log(engine[0]);
// this returnes undefined bcs doesnt point to any object
console.log(engine.headGasket.pots[1])
// this retuns to the array 1 on the object scope.

//SCope has Access Operator- callable objects
//Function is also called callable objects/ execution context


//Example of Function scope- callable object excution

function runExpression () {

    var a = 90;
    function add() {
        return a + 10;
    }
    return add(a);
}

runExpression();
console.log(runExpression())
//100
// the function runExpression() returns callaboject based on the scope


// The function call back runs on Excution Contxt-Stack

//Process- you have the first runExpression() Excution Context-Stack
//The secon , you have the second Excution context-Stack add()
// This two execution context is placed in a Stack.

//The runExpression is first executed in a symbal a = 10
//The add() execution is placed on a symbol b.

//What is does is can another potential another callable object access the symbol a
//The answer is yes it can, - the add() expression can access the symbol a. It doesnt delete them
//so this is called a closure
// it encloses and encapsulates all the symbols that has a reference
// or could have a potential reerence. 


//GARBAGE COLLECTION
//Only what is in the scope could potentail access one of the symbols
//By garbage collection, getting rid of symbols we dont need

function runExcution () {

    var a = 100;
    function add(b) {
        return a + b;
    }
    // return add(a);
    console.log(add(10), add(20));
}

runExcution();
// 110, 120
//mmaxde possible by the excution stack


//TOPIC GLOBAL SCOPE

var engine1 = {
    maker: 'Ford',
    headGasket: {
        pots: [
            'pistons1',
            'pistons2'
        ]
    }
}

function runGlobal() {
    var a = 10;

    function add() {

        var maker = 'Mec'
        console.log(engine1)
        console.log(a)
        console.log(maker)
    }
    
add();
}

runGlobal()

// this runs the egine at the global scope
// also runs a at the global scope
// the maker finds it at the global scope and did tnot change the global var maker
// what we have here is creating engine1 in a global scope
// it searched engine1 on rthe console and then goes furthewr to search it on the global scope

// var engine2 = {
//     maker: 'Ford',
//     headGasket: {
//         pots: [
//             'pistons1',
//             'pistons2'
//         ]
//     }
// }

// function runGloba2() {
//     var a = 10;

//     function add() {

//         // engine2: 'BMW';
//          test = 'Volvo'
//     }
    
// add();
// }

// runGlobal2();

//this outputs Reefrenece error
// you always have to create with a var or let and assignment operator
// using another expression that is not in the scope returns error

//By gloabl scope, you can access the expression anywhere. It will be globally available
//symbol names only attach to the window objects. that means it is globally accessible


// TOPIC CONSTRUCTOR FUNCTION- This keyword is a pointer
//Uses the this keyword to return new object.
// calls the object function by adding new to the object

function apple (x, y, color, score) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;

}
// you have to add a reference to help creating instances
//var apple1

var apple1 = new apple( 10, 20, 'red', 200)

console.log(apple1)

var apple1 = new apple (  10, 20, 'red',  200 )
var apple2 = new apple (  100, 50, 'blue', 200 )
var apple3 = new apple (  14,  60,  'white', 200 )
//you can now strat creating instances a copy of the original object

console.log(apple2)
console.log(apple3)


//COMPARISON

//Is Not EQUAL - Polymorphism happens here

console.log(10 != '100'); // true, they are not equal
console.log(10 != '10');  // false, they are equal
console.log(10 != 'string'); //true, not equal
console.log('man' != 'Man'); // true, they are not equal


//USING STRUCTLY IS NOT EQUAL !== returns the exact, is not polymorphism

console.log(10 !== '100'); // true , not equal
console.log(10 !== '10'); // true not equal
console.log('man' !== 'Man') // true not equal
console.log('Man' !== 'Man') // fasle they are equal


// === takes no polymorphism and returns the exact
// compares both sides of the value
console.log(10 === '100'); // faslse, not equal
console.log(10 === '10'); // fasle, not equal
console.log('man' === 'Man') // false not equal
console.log('Man' === 'Man')// true equal


//USING COMPARISON IN IF STATEMENT
//1
var carsLeft = 0,
    carsRight = 0,
    greenMan = 'no'

    if (greenMan === 'yes') 
    {
        console.log('cross the road')
    } else if  ( carsLeft === 0)
    {
        console.log('All clear: cross the road')
    }
    

    // 2
    var carsLeft = 1,
    carsRight = 0,
    greenMan = 'no'

    if (greenMan === 'yes') 
    {
        console.log('cross the road')
    } 
    else if  ( carsLeft === 0)
    {
        console.log('All clear: cross the road')
    }
    else 
    {
        console.log('Stay where you are')
    }


    //Using IF SATATEMENT AND COMPARISON OPERATOR TOGETHER
    //|| takes true when one side turns out to be true
    // && LOGICAL AND both sides must be true, if not false

    // using || takes true when one side turns out
    var carsLeft = 1,
    carsRight = 0,
    greenMan = 'no'

    if (greenMan === 'yes') 
    {
        console.log('cross the road')
    } 
    else if  ( carsLeft === 0 || carsRight === 0)
    {
        console.log('All clear: cross the road')
    }

    else 
    {
        console.log('Stay where you are')
    }

// || both sides are false
    var carsLeft = 1,
    carsRight = 0,
    greenMan = 'no'

    if (greenMan === 'yes') 
    {
        console.log('cross the road')
    } 
    else if  ( carsLeft === 0 || carsRight === 1)
    {
        console.log('All clear: cross the road')
    }

    else 
    {
        console.log('Stay where you are')
    }



    // || LOGICAL OR both sides are false
    var carsLeft = 1,
    carsRight = 0,
    greenMan = 'no'

    if (greenMan === 'yes') 
    {
        console.log('cross the road')
    } 
    else if  ( carsLeft === 1 && carsRight === 1)
    {
        console.log('All clear: cross the road')
    }

    else 
    {
        console.log('Stay where you are')
    }



    // || both sides are false
    var carsLeft = 1,
    carsRight = 0,
    greenMan = 'yes'

    if (greenMan === 'yes') 
    //output once it dictates the right match it console
    {
        console.log('cross the road')
    } 
    else if  ( carsLeft === 0 || carsRight === 1)
    {
        console.log('All clear: cross the road')
    }

    else 
    {
        console.log('Stay where you are')
    }



    // multiple comparison

    // || both sides are false
    var carsLeft = 1,
    carsRight = 0,
    greenMan = 'no'

    if (greenMan === 'yes') 
    {
        console.log('cross the road')
    } 
    else if  (greenMan === 'yes' && carsLeft === 1 || carsRight === 0)
    {
        console.log('All clear: cross the road')
    }

    else 
    {
        console.log('Stay where you are')
    }


    // When in multiple comparison values are in bracket
    // using comparison operators LOGICAL AND 
    
    //and or OR in else if.

    // || both sides are false
    var carsLeft = 1,
    carsRight = 0,
    greenMan = 'no'

    if (greenMan === 'yes') 
    {
        console.log('cross the road')
    } 
    else if (greenMan === 'yes' && ( carsLeft === 0 || carsRight === 1))
    {
        console.log('All clear: cross the road')
    }

    else 
    {
        console.log('Stay where you are')
    }


//For Loop increment
    var register = ['FIRS', 'Tax', 'Finance', 'Agent'];

    for (var i = 0;  i < register.length; i++) 
    {
        console.log(register[i])
    }

// for loop . decrement
    var monitor = ['Away', 'Tax', 'Finance'];

    for (var i =  monitor.length - 1; i >=0; i-- ) 
    {
        console.log(monitor[i])
    }

    // for in loop - using index

    var monitorIn = ['Some', 'Income', 'Finance'];

    for (var index  in monitorIn ) 
    {
        console.log(monitorIn[index])
    }



//DOM

document.getElementById('gender').innerText += " Male";

var pHello = document.getElementById('gender');

pHello.innerText = "new world";
pHello.innerText += " order";


var el = document.getElementById('style');
el.style.backgroundColor = "blue";
el.style.color = "white";
el.style.fontFamily = "Monospace";

var gel = document.getElementById('gender');

gel.innerText = "new world";
gel.style.backgroundColor = "yellow";
gel.style.color = "black";
gel.style.fontFamily = "Monospace";
gel.style.fontSize = "24px";
gel.style.padding = "20px";

//Styling this way is a lot more complicated.
//Better styling below

// var cla = document.getElementById('topic')

// cla.topic.cssText = " backgroundColor:purple; color:white; fontFamily:monospace ";



// to see all the css declaration on the console.
// type symbol name - example el.style on the console.


// How get computed styles by default.
//getComputedStyle(el)

var select = document.getElementsByName('cars')[0];

select.onclick = function(e) {
    console.log(e);
};

function ClickCallBack(e) {
    console.log('click by add event listener');
}

select.addEventListener('click', ClickCallBack, false);
select.removeEventListener('click', ClickCallBack);


// How to create element from the DOM to render in the body
// using document.createElement
//using alert and appendChild

var element = document.createElement('div');

element.style.cssText = "width: 200px; height: 200px; background:blue;";

element.onclick = function () { alert('hello'); };

// document.body.appendChild( element );

var target = document.getElementById('yellow');
document.body.insertBefore( element, target);
// this targets the element change from top to down. 


