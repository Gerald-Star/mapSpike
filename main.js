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



//CALLOBJECTS
//calling function objects

function name1 () {
    var fullname = 'Lawrence';
    return fullname;
}

//call the function
name1();
console.log(name1());