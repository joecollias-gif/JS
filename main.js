
  console.log("Hello World");
  //variable
  let firstname = "Daily Tuition"
  let Age = 24
  console.log(firstname);
  console.log(Age);
  const TEMP = 77;
  console.log(TEMP);
  let Goal = "Tutorial Make Happy";//this is a literal
  let reference = Goal;
  console.log(reference);
  let text = "This is your string";
  console.log(text);
  /*const blue = symbol();
  const white = symbol("Color White");*/
  const obj = {
    name:"Sandi",//key=name,value=Sandi 
    Age: 24 //key=age,value=24
  };//here we created an object and specified the object with 2 properties
  console.log(obj);
  const a1 = [1,2,3,4,5];
  const a2 = [1,2,null,4,'five'];
  const a3 = ['hello','world','array'];
  //make an array containing an array
  const a4 = [
    [1,2,3],
    [4,5,6]
  ];
  //get array length
  console.log(a1.length);
  //get array value
  console.log(a1[4]);//would be 5
  //change array element
  a3[0] = "Welcome";
  console.log(a3[0]);
  //display date
  const now = new Date();
  console.log(now);
  //create map
  //const roles = new map();
  //assign role to user
  //roles.set(t1,'user1');
  //roles.set(t2,'user2');
  //create set
  //const roles = new Set();
  //specify role to user
  //roles.add("User1");
  //use unicode
  let str = 'we took bag from him, he said "This is my bag"';
  let str1 = "Dont touch my bag";
  //escaping you would use a \ to distinguish between single and double quotes

  //string concatenation
  let temp = 20.5;
  let strcat = "Weather of Las Vegas is" + temp + "\u00b0c";//u00b0c display degree symbol
  console.log(strcat);
  //use string literal on 2 lines
  let rt = "One line \n Second line";
  console.log(rt);
  //if statement is a control statement
  /*if(expression)
    statement1;//statement execute when true
  else
    statement2;//statement execute when false*/  
  let time = 15;
  if(time < 12){
    console.log("Good Morning");
  }else if(time <17){
    console.log("Good Afternoon");  
    console.log("Haaaaayyyyy");
  }else {
    console.log("Good Evening");
  }
  /*switch(expression){
    case value1:
    //executed when the value matches value1
      [break],
    case value2:
    //executed when the value matches value2
      [break];
    case value3:
    //executed when the value matches value3
      [break];
    case valueN:
    //executed when the value matches valueN
      [break];
    default:
    //executed ehen none of the values match  

  }*/
/* example
    which language do you choose?
    1)JS    2)Python
    3)PHP   4)Asp*/
  let ans = 5; //this is selected answer
  switch(ans){
    case 1:
      console.log("You have selected JS");
      break;
    case 2:
      console.log("You have selected Python");break;
    case 3:
      console.log("You have selected PHP");
      break;
    case 4: 
      console.log("You have selected Asp");
      break;
    default:
      console.log("Wrong answer");
      break;          
  } 
  /*loops
    JS has 4 looping statements
    1)While
    2)do/While
    3)for
    4)for/in*/
  //While loop only executed when expression is true
  /*while (expression)
      statement*/
  //example print 0-9 numbers
  let count = 0;
  while (count < 10){
    console.log(count);//count in console 
    count++;//increase count value by 1
  }
  /*do/while loop
  do
    statement;
    while(expression);*/
  let counts = 0;
  do{ //execute block at least once
    console.log("Counts Value" + counts);
    counts++; //increase count var val by 1
  }while(counts < 3); //evaluate expression
  /*for loop
  for(initialization;expression;increment/decrement)
    statement;-only executes if value of expression returns true*/
  //print 0-4 on the console
  for(let num = 0;num<5;num++)
    console.log("Number" + num);
  /*Execution patter
  -initialize variable and specify value
  -evaluate expression (if false terminates)
  -executes statement if true
  -execute increment/decrement operator*/
  //multiple variables
  for(let i=0,j=5;i<5;i++,j--){
    console.log(i+"and"+j);
  } 
  /*above we increased variable i
  decreased variable j*/
  
  //nested for loops
  for(let k=1;k<4;k++){
    for(let p=1;p<7;p++)
    console.log(k+","+p);
  }
  console.log("\n");
  
  /*for in loop 
  for(variable in object)
    statement;*/
  const objs={a:1,b:2,c:3,d:4};
  for(let o in objs){
    console.log(objs[o]);//object property values on console using keys
  }     
  /*variable o=a
    console.log()=1*/
  const objs1={a:1,b:2,c:3,d:4};
  for(let o in objs1){
    console.log(o);//here only keys show in console
  }  
  /*for of loop
  for(variable of object)
    statement;*/
  //declare array
  let ary=[1,2,3,4,5];  
  for(let val of ary){
    val +=1;
    console.log(val);//show array elements on console; if you used for in loop here you would see the index #s of array 0-4
  }
  //declare string
  let strg="orbit";
  for(let val of strg){
    console.log(val);//shows string character on console
  } 

  /*Simple literals
    5.3 is a number literal
    "Daily" is a string literal
    JS reserve words
      null, true, false (keywords)
    Bare expressions
      str expression evaluate to value of the str 
      undefined is a global variable not a keyword like null*/

  let y,z;//declare variable y and z
  y=4*5;//combine 2 expressions with multiplication(*) and assignment operator(=) 
  z=y=4*5;//combine 3 expressions
  z=y=20//evaluate multiplication
  z=20//assign 20 value to variable y //z still undefined
  20;//assign 20 variable value to variable z
  console.log(y);//shows variable on console 
  console.log(z);//shows variable on console
  /*4,5 is operand,(*) is operator
    identifier expression and literal expression are not operator expressions
    everything that results in value is an expression*/

  //pre and post-increment
  let e,f=5;
  let g,h=7;
  let q,t=42;
  e=++f;//pre increment
  console.log(e+" with pre-increment");
  g=h++;//post increment
  console.log(g+" with post increment");
  g=h++;//post increment
  console.log(g+" with post increment");
  q=--t;//pre decrement
  console.log(q+" with pre decrement");

  //Comparison Operator
  let w=71,
    v=72;
  console.log(w<v);//true 71<72
  console.log(w>v);//false 71>72
  console.log(w<=v);//true 71<=72
  console.log(w>=v);//false 71>=72
  
  //Strict and Abstract Equality
  let n=100,std='100';//1st variable is 2nd variable is string
  console.log(n==std);//true n&std have same value does not check type (abstract)
  console.log(n===std);//false n&std not equal because different types
    //convert std to # using strict equality
  console.log(n===Number(std));//convert to #
    //use not strict equality
  console.log(n!==Number(std));
    //use not abstract
  console.log(n!=std);
  
  //And Operator (&&)
  let xy=10,yz=10;
  if(xy===10 && yz===10){
    console.log("true");
  }else{
    console.log("false");
  }
  //Or Operator (||)
  let xx=10,yy=10
  if(xx===10 || yy===5){
    console.log("true");
  }else{
    console.log("false");
  }//still returns true because 1 of expressions is true
  
  //Not operator (!)
  let zz=true;
  console.log(zz);
  console.log(!zz);

/*Assignment Operator (=)
  Like let x=5
  chaining j=x=40
  Arithmatic addition
  x=x+y;*/
let c=10,
  d=15;
//c=c+d;with arithmatic addition
c+=d;//with addition assignment operator
console.log(c);
c-=d;//with subraction
console.log(c);
c*=d;//multiplacation
console.log(c);
c/=d;//division
console.log(c);
c%=d;//remainder
console.log(c);
/*Bitwise Operator
c<<=d//left shift
c>>=d//right shift
c>>>=d//right shift zero fill
c&=d//and assignment 
c|=d//or assignment
c^=d//XOR assignment*/

//Type of operator
console.log(typeof 1);
console.log(typeof"daily");
console.log(typeof true);
console.log(typeof null);//exception this would show object
console.log(typeof function(){});
//Comma(,)
//let x=40,y=10 used(,)to seperate variables
//Grouping Operator ()parenthesis
//void operator will return undefined
//<a href="javascript:void 0">Nothing happend</a>
/*Destructing Assignment Operator
normal object declaration*/
const ject={aa:1,bb:2,ee:3,ff:5};
//destructing assignment
const{aa,bb,ee,ff,gg}=ject;
console.log(aa);
console.log(ee);
//declare array
const arry=[1,2,3,4,5,6];
//destructing assignment
let[a,b,o,...rest]=arry;//spread operator
console.log(a);
console.log(b);
console.log(o);
console.log(rest); 
//Operator Precedence
let qq;
qq=5+3*2;
//qq=5+6;preform multiplication
//qq=11;preform addition
//11;assign value 11 to qq variable
console.log(qq);
let ww;
ww=20/4+2*(7+4-2);//23
//ww=20/4+2*(9)parenthesis first
//ww=5+2*9 next performed division 20/4
//ww=5+18 next performed multi 2*9
//ww=23 finally performed addition 5+18 
console.log(ww);

//Member access (.)
//object.property; must be valid identifier
const oj={id:"42", name: "horseface"};
console.log(oj.name);//access object property using (.) member access operator
console.log(oj.id);
/*Computed Member Access[]
console.log(oj[name])//same as above instead of (.) use [] */
//in operator first declare object
const car={cname:'ford',model:'f150',year:1997};
console.log("cname" in car);//true
//Operator new
class Model{
  constructor(){

  }
}
//create instances of Model()object
const c1=new Model();//create instance 1
const c2=new Model();//create instance 2
//Instance of Operator
const day=new Date
console.log(day instanceof Date);
const ry=[1,2,3];
console.log(ry instanceof Array);
console.log(ry instanceof Date);
//Delete operator
const deke={x:1,y:2,z:3};
console.log("x"in deke);//true x is property of object
delete deke.x;
console.log("x"in deke);//false x is deleted
//using Array
const pen=[1,2,3,4,5];
console.log(pen[4]);
delete pen[3];
console.log(pen[3]);
//Conditional Operator works like if else
let print="That is awful";
if(print){
  console.log(print);
}else{
  print="No terrible";
  console.log(print);
}
let prints="That is awful";//if you remove literal you would get "No terrible"
prints=prints?prints:"No terrible";
//above if expression is true you see "That is awful", if false you see "No terrible"
console.log(prints);

//Jump Statements
for(let u=1;u<=5;u++){
  if (u==3)break;//after break only 1-2
  console.log(u);//before break 1-5
  //break label statement
  //break labelname;
}  
//Label statement allows to specify name to the specific block that you can refer elsewhere in program
let abb=1;
label:while(abb==1){
  console.log(abb);//result is 1
  break label;//breaks loop execution after 1
}
//Continue statement continues loop from last iteration
let ba=0
while(ba<5){
  ba++;//increase value of ba by 1 post increment
  if(ba==3){
    continue;//will skip 3
  }
  console.log(ba); 
}
//Return Satement returns value to its caller
//return expression;
function puke(g){return g+g;}
console.log(puke(5));//print addition of g variable

//Functions
/*function funname(arg,...,argn){
  statements
}*/
function magic(){
  //console.log("Warning");
  //console.log("Function");
  return"Warning Function";
}
//magic();//call function
//console.log(magic());
const ll=magic;
console.log(ll());
//using object property
const pur={ll:magic};
console.log(pur.ll());

//Function Arguments
//function with two paramenters or arguments
function demo(front,rear){
  //front and rear are formal arguments
  //when they receive 5&40 value they become actual arguments
  //front=5 and rear=40  
  return (front+rear)/2;//return average of two numbers
}
let front=5,rear=40; 
console.log(demo(5,40));
console.log(demo(front,rear));
//Default arguments
function kk(x="3"){
  return `in function:x=${x}`; //use backtick to specify string
}
console.log(kk());

//Anonymous Funcion
//assign function as expression
/*const blu=function(){
  statements
}
blu();calls function*/
const blu={
  name:"Anonymous Function",
  invoke:function(){//can use invoke only would be method object property
    return "Hey";}
};//created an object with 2 properties name and invoke
console.log(blu.invoke());//call function using object property

//Arrow Notation
//example anonymous function
//const f1=function(){return"Whats up";}
//anonymous function using arrow function
const f1=()=>"Whats up";
//anonymous function using argument
//const f2=function(arg1){return`Value of the Argument:$(arg1`;}
//using arrow function with argument
const f2=arg1=>'Value of the Argument:$(arg1)';
//using 2 arguments
//const f3=function(arg1,arg2){return arg1*arg2;}
//using arrow function with 2 arguments
const f3=(arg1,arg2)=>arg1*arg2;

//This Keyword
const fluf={
  name:"Gary",
  majic(){return `Hi ${this.name}`;}
  //this keyword refers to the current object
}
//call majic method
console.log(fluf.majic());
const m1=fluf.majic;
console.log(m1===fluf.majic);
console.log(m1());



    
   

      

