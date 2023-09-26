console.log('Hello User!') // old
window.alert("Hacker ahead!") // new prog 

// NOte: The comment are semilar in Java and CSS

// this is one line comment

/*
    this is for multiple line comment
*/

// Check this out!

console.log("Hello",fisetName,"!")
console.log("This is your age now!",age,"years old");
console.log("Enrolled",student);

document.getElementById("p1").innerHTML = "Hello " + fisetName;
document.getElementById("p2").innerHTML = "Your age is " + age+ 'years old!';
document.getElementById('p3').innerHTML = "Enrolled " + student+ "!"

//New Code Below
let age=19;

age +=1;
age -=1;
age *=2;
age %=3;

console.log(age)
/*
    Operator precedence
    1. parenthesis ()
    2. exponints
    3. multuplication & divition
    4. addition & subtraction
*/

let result = 1+2*(3+4);

console.log(result);
