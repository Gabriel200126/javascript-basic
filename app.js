                                                                 /* Basic javscript models  */



//variables examples

const yourName = 'Gabry'
let yourAge = 21;

console.log(yourName, yourAge)
// log : 'Gabry' 21





//yourName = 'John'

//console.log(yourName);
//log: error, because is a costant and we cannot change.






//operators + - * / %
let x = 3;
let y = 7;
let o = x + y;

console.log(o);
// log : 10





let i = 11;
let t = 5;
let u = i % t;

console.log(u)
//log:  1 bacause 11 / 5 equal 2 with rest of 1




i = i+5;
console.log(i)
//log: 16




i+=5;
console.log(i);
//log: 16, the same, and same we can do to all of operators







//objects
let family = {
    me: 'Gabry',
    brother: 'John',
    mother: 'Rihanna',
    father: 'Mattew'
}

console.log(family);
//log: me: Gabry, brother: John......





console.log(family.father);
// log: Mattew

//typeOf Boolean string number undefiend 




let computer = 'HP'

console.log(typeof computer)
// log: string



let myAge = 21;

console.log(typeof myAge);
// log: number



let game = true;

console.log(typeof game);
//log : boolean. boolean are: true or false;



let distance;

console.log(distance);
//log: undefiend, because the distance variable are empty.




let nothing = null;

console.log(nothing);
 //log: null





//this

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person)
    
  /*log: firstName: "John",
    lastName : "Doe",
    id       : 5566
    fullName: John Doe
*/






 //Prototype 

 function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person.prototype.nationality = "English";
  
  const uncle = new Person("John", "Doe", 50, "blue");
 
  console.log("The nationality of my father is " + uncle.nationality) 

  // log: The nationality of my father is English.






//closure
// A closure is a function having access to the parent scope, even after the parent function has closed.
  const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  add();

  console.log(add());

  //log: 4





  //primise

  let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });






    //scope 

    //block scope

    {
        let scope = 2;
        //can use variable scope here
    }  
    //but not here





    //local/function scope

    function sco(){
        let car = 'volvo';
        //can use here
    }
    //but not here





    //global variable

    let bob = 'bob'

    function glob(){
        // we can use bob variable here
    }

    //we can use bob variable here too




    //array
                /* 0        1       2 */
    let list = ['bread', 'milk', 'eggs']

    console.log(list);
//log: bread, milk, agg

console.log(list[0])
//log: bread

console.log(list.length);
//log: 3, cause list have 3 elements








//objecs

let me = {
    name: 'Gab',
    age : 21,
    height: 1.89
}

console.log(me);
//log: name: Gab, age: 21, height: 1.89;




//functions  and else if statement

function ex(){
    /*if(condition){
      code
    }else{
        code
    }*/
}





//loops


for(let i = 1; i <= 10; i++){
    console.log(i)
}
//log: 1 2 3 4 5 6 7 8 9 10





//fo in 

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + ' ';
}

console.log(txt);
//log: 45 4 9 16 25





//for each

const numbers2 = [45, 4, 9, 16, 25];

let txt2 = "";
numbers2.forEach(myFunction);

function myFunction(value) {
  txt2 += value + ' '; 
}
console.log(txt2);

//log: 45 4 9 16 25






// while loop 

let text3 = "";
let i2 = 0;
while (i2 < 10) {
  text3 += "The number is " + i2 + ',  ';
  i2++;
}

console.log(text3)
//log: the number is 0, the number is 1.......... the number is 9








//do while
let text4 = ""
let i3 = 0;

do {
    text3 += "The number is " + i2 + ',  ';
  i3++;
}
while (i3 < 10);  

console.log(text4);

//log: the number is 0, the number is 1.......... the number is 9







//DOM document object model

/*
JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can create new HTML events in the page
*/

//example methods

document.getElementById(''); // takes the specific id from html
document.querySelector(''); // takes the specific #id, .class or tag from html

let doc = document.querySelector('');






//events

document.addEventListener('click', school()); // on mouse click event starts, school() is the name of function
window.addEventListener('scroll', school()); // on scroll of window event starts
//the are many others, go on developer.mozilla and discover them.









    

  


























