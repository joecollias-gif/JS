This is the starter tutorial for JS
completed 1-8
completed 9-12
completed 13-19
completed 20-23
completed 24-32
completed 33-36
completed 37-39
completed 40-43
completed intro to JS
Advanced JS
completed 44-51
completed 52-57
created DOM.html
completed 58-59
completed 60-65
Completed starter tutorial for JS

BEGINER QA
1)What is JS?
JS is an object-oriented computer programming language commonly used to create interactive effects within web browsers.
Allows you to build into otherwise static HTML pages
Language embedded in Netscape, Internet Explorer, and other web browsers
2)What is difference between Java and JavaScript(JS)?
Java is a complete programming language whereas JS is a coded program that can be introduced to HTML pages
Java is an object oriented program(OOPS) or structured programming language like C++ or C whereas JS is a client side scripting language
-client side does not allow reading or writing of the files
-cannot be used for networking applications no support available
3)What are data types supported by JS?
-Primitive and Object types
 primitive is not an object and has no methods(undefined,null,boolean,string,symbol,number)
 object
4)What are features of JS?
A)Lightweight, interpreted programming language (JS sent to browser and browser does something with the script)
B)Designed for creating network centric applications (handles dates&times, 
C)Complementary to and integrated with Java (object based language handling pre defined objects)
D)Complementary to and inegrated with HTML (all script language must be terminated with semi colon)
E)JS is open and cross platform
 
5)Is JS a case sensative language?
YES, JS is case sensative. The language keywords, variables, function names
and any other identifiers must always be typed with a consisten capitalization of letters
6)What are advantages of JS?
Less server interaction (validate user input before sending page to server, less load on server)
Immediate feedback to visitors (dont have to wait for page to reload to see if they forgot to enter something)
Increased interactivity (can create interfaes that react when user hovers over them with mouse or activates by other keyboard)
Richer interfaces (can include items such as drag and drop or sliders)
7)How can you create an object in JS?
JS supports object concepts very well
var(variable) emp(variable name)={name:"Daniel",age:23}; object is name and age 
8)How can you create an array in JS?
arrays can be defined using the array literals 
var x=[1];-arrays are high level listlike objects
var y=[2,3,4,5];-can store #s,string,and boolean in array
9)What is a name function in JS & how to define it?
function is a block of code defined one time and can be called any # of times later
A named function has a name when it is defined and can be defined using function keyword
function named(){do stuff here}
function is composed and influenced by many compliments
function is a JS procedure, a set of statements that performs a task or calculates a value
function must be defined in the scope from which you wish to call it
10)Can you assign an annonymous function to a variable and pass it as an argument to another function?
YES, an annonymous function can be assigned to a variable and also pass it as an argument to another function
11)What is argument objects in JS & how to get the type of arguments passed to a function?
JS variable arguments are the arguments passed to a function
you can pass them using the typeof operator
function func(x){console.log(typeof x, arguments.length);
func();-undefined, 0
func(1);-number 1
func("","","");-string 3 
the arguments object is a local variable available with all non arrow functions
you can refer to a functions arguments inside that function by using its arguments objects
it has entries with each of the arguments the function was called with 1st entries index at 0
arguments objects are an array like construct with curly braces
12)What are scopes of a variable in JavaScript?
Scope of a variable is the region of a program in which it is defined
JS variable has 2 scopes
-Global variable is visible everywhere in JS code
-Local is only visible within a function where it is defined
13)What is the purpose of 'this' operator in JS?
JS keyword 'this' refers to the current context
owner of the function that is currently being executed
or to the object the function is a method of
in strict mode 'this' is undefined
14)What is callback?
Callback is a plain JS function passed to some method as an argument or option
Some callbacks are events that are called to give the user a chance to react when a certain state is triggered
15)What is Closure? Give an example
Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope
Example: 
function create(){
	var count=0;
	return{
	increment:function(){
		count++;
	};
	print:function(){
		console.log(count);
		}
	}
];
var c=create();
c.increment();
c.print() returns 1
defines a function inside another function and exposes it
16)What are some built-in methods and what values do they return?
Built-in Method			Returns
CharAt()			returns character at specified index
Concat()			returns character at specified index
forEach()			calls function for each statement in array
indexOf()			returns the index within the calling Sring
				object of the first occurance of the specified value
length()			returns length of string
pop()				removes last element from array and returns that element
push()				adds one or more elements to end of an array
				and returns new length of array
reverse()			reverses order of elements or array
17)What are the variable naming conventions in JS?
Rules to follow while naming variables in JS
	do not use any of the JS reserved keyword as variable name
	JS variable names should not start with a numeral(0-9)
	JS variable names are case sensative
18)How does typeOf operator work?
used to get data type of its operative(can be literal or data structure)
typeOf is a unary operator that is placed before its single operand,
which can be of any type. Its value is string indicating the date type of operand
19)How to create a cookie using JS?
the simplest way to create a cookie is to assign a string value to the document.cookie object
syntax: document.cookie="key1=value1;key2=value2;expires=date";
20)How to read a cookie using JS?
reading a cookie is as simple as writing one, because the value of the document.cookie object is the cookie
the document.cookie string will keep a list of name=value pairs separated by semicolons
can use strings'split()function to break the string into key and values
21)How to delete a cookie using JS?
to delete a cookie so that subsequent attempts to read the cookie return nothing,
set the expiration date to a time in the past
22)What is the difference between attributes and property?
attributes provide more details on an element (id,type,value,etc)
property is the value assigned to the property("text",value='Name,etc)
INTERMEDIATE QA
23)List the different ways an HTML element can be accessed in JS code?
getElementById('idname')
getElementsByClass('classname')
getElementsByTagName('tagname')
querySelector()
24)In how many ways a JS code can be involved in an HTML file?
JS code can be involved in 3 ways
	Inline-JS function assigned to a variable created at runtime(annonymous function) 
	Internal-can have JS function available while in JS code
	External-can have JS function in seperate file to use when called 
25)What are the ways to define a variable in JS?
Three ways to define a variable in JS (create a variable and optionally initialize value of that variable)
	var-	on global scop
	let-	variable may be reassigned such as a counter in a loop(variable only used in block its defined in)
	const-	variable wont be reassined never changes
26)What is a typed language?
typed language is in which the values are associated with values and not with variables
Two types
	dynamically-variable can hold multiple types (numbers,characters) 
	statically-variable can only hold one type (string)
27)What is the difference between local storage and session storage?
both used to store data on the client site
Local storage will stay until it is manually cleared through settings on program
Session storage will leave when the browser is closed
28)What is the difference btwn operators '==' & '==='?
Operator '==' compares the value (compare # with string is allowed)
Operator '===' compares both value and type (must compare # with # string with string)
29)What is difference btwn null and undefined?
undefined means a variable has been declared but has not been assigned a value
null is an assignment value and can be assigned to a variable
When typeOf operator is used on null, the value is an object
When typeOf operator is used on undefined, the value is undefined 
30)What is the difference btwn undeclared & undefined?
Undeclared variables are those that do not exist in a program and are not declared
Undefined variables are those that are declared but have not been given a value
31)Name some of the JS frameworks?
JS framework is an application framework written in JS, refers to JS library in its control flow	
There are many JS frameworks available some of the most commonly used are:
Angular JS is JS based open script front end web application framework mainly maintained by google, individuals, and corporations with single page applications
React JS is a JS library for building user interfaces maintained by facebook, individuals, and companies 
View is a progressive framework for developing user interfaces, unlike other monolythic frameworks view is designed from the grown up to be incrementally adoptable
32)What is the difference btwn window and document in JS?
JS window is a global object which holds variables,functions,history,location
JS document also comes under the window and can be considered as the property of the window
document is basically subset of window itself
33)What is the difference btwn innerHTML and innerText?
innerHTML will process an HTML tag if found in a string
innerText will not process an HTML tag if found in a string
34)What is an event bubbling in JS?
in bubbling is when the handle is captured and fired by the innermost element and propagated to outer elements 
when an event is fired on an HTML element, the execution starts from that event and goes to its parent element
Then the execution passes to its parent element and so on till the body element 
35)What is NaN in JS?
NaN is short for Not a Number
When a string or something else is being converted into a number and that cannot be done
36)How do JS primitve/object types passed in functions?
Primitive types in JS are passed by value (creating copy of original)
Object types are passed by reference (example nicknames, have name and nickname but still 1)
37)How to convert the string of any base to integer in JS?
The parseInt()function is used to convert numbers btwn different bases
it takes the string to be converted as its first parameter, and the second parameter is the base of the given string
parseInt("4F", 16);this would provide integer value of string
38)What would be the result of 2+5+"3"?
2 and 5 are integers, they are added numerically
3 is a string, its concatenation will be done
Result would be 73
39)What are exports & imports?
Imports and exports help to write modular JS code
Using imports and exports we can split our code into multiple files
//index.js
import name,dob from './person';
console.log(name);
console.log(dob);
//person.js
let name="Jack",occupation='developer',dob=11.16.79;
export{name,dob};

ADVANCED QA
40)What is the 'strict' mode in JS and how can it be enabled?
strict mode is a way to introduce better error-checking in code
when using strict mode, cant use implicitly declared variables or assign value to a read-only property or add a property to an object that is not extensible
can enable strict mode by adding "use strict" at begining of file, program, or function
41)What is a prompt box in JS?
A prompt box is a box that allows the user to enter input by providing a text box
Label and box will be provided to enter the text or number
42)What would be the output of the following code?
var y=1;
if(functionF(){})
	{
	y+=typeOf F;
	}
console.log(y);
output would be 1undefined,if condition statement evaluates using eval
eval(function f(){}(which is true)
undefined because if executes at runtime
43)What is difference btwn call & apply?
call()method calls a function with a given value and arguments provided individually
syntax:fun.call(thisArg[, arg1[, arg2[,...]]])
apply()method calls a function with a given this value, and arguments provided as an array
syntax:fun.apply(thisArg, [argsArray])
call arguments passed individually
apply arguments passed as an array
44)How to empty an array in JS?
arrayList=[] will set the variable arrayList to a new empty array (undefined array list)
arrayList.length=0; will clear existing array by setting length to 0
arrayList.splice(0,arrayList.length); empties array and updates all references to the original array
while(arrayList.length)
{arrayList.pop();} this implementation can also empty arrays not recommended
45)What will be the output of the following code?
var output=(function(x){
	delete x;
	return x;
})(0);
console.log(output);
Output would be 0. delete operator is used to delete properties from an object
46)What will be the output of the following code?
var x={foo:1};
var output=(function(){
	delete x.foo;
	return x.foo;
}();
console.log(output);
Output would be undefined. delete operator is used to delete properties of an object
47)What would be the output of the following code?
var employee={company:'xyz'}
var empl=object.create(employee);
delete empl.company
console.log(empl.company);
Output would be xyz. empl object has company as its prototype property
48)What would be the output of the following code?
//nfe(named Function expression)
var foo=function bar(){
	return 7;};
typeof bar();
Output would be reference error. A function definition can have only one reference variable as its function name
49)What is the reason for wrapping the entire content of a JS source file in a function book?
It creates a closure around the entire contents of the file
creating a private namespace and thereby helps avoid potential name clashes btwn different JS modules and libraries
JQuery plug ins
50)What are escape characters in JS?
Escape characters(backslash) is used when working with special characters like single quotes
double quotes, apostrophes, and ampersands
Place backslash before the characters to make it display
document.write "I'm a "nice" guy"
document.write "I m a \"nice\"guy" 
    	