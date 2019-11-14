
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
  let strcat = "Weather of India is" + temp + "\u00b0c";//u00b0c display degree symbol
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

      

