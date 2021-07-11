// -------- Chapter # 21 - 25: wordING METHODS --------

// -------- Task # 01 --------
// var fisrtName = prompt("Enter first name")
// var lastName = prompt("Enter last name")
// var greeting = "Hello! " + fisrtName + " " + lastName 
// alert(greeting)


// -------- Task # 02 --------
// var favMob = prompt("Enter your  favorite mobile phone model");
// var len = favMob.length
// document.write("My Favorite phone is: " + favMob + " <br>Length of the wording: " + len)


// -------- Task # 03 --------
// var word = "Pakistani";
// var index = word.indexOf("n")
// document.write("wording: " + word + " <br>Index of 'n': " + index)


// -------- Task # 04 --------
// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l")
// document.write("wording: " + word + " <br>Last index of 'l': " + lastIndex)


// -------- Task # 05 --------
// var word = "Pakistani";
// var x = word.charAt(3)
// document.write("wording: " + word + " <br>Character at index 3: " + x)


// -------- Task # 06 --------
// var fisrtName = prompt("Enter first name")
// var lastName = prompt("Enter last name")
// var greeting = "Hello! "
// document.write(greeting.concat(fisrtName, " " ,lastName))


// -------- Task # 07 --------
// var city = "Hyderabad";
// var upadated = city.replace("Hyder","Islam") 
// document.write("City: " + city + "<br>After replacement: " + upadated)


// -------- Task # 08 --------
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var updated = message.replace(/and/g,"&")
// document.write("Draft Message: " + message + "<br>Upadated Message: " + updated)


// -------- Task # 09 --------
// var value = "472"
// var valueType = typeof(value)
// var wordToNum = parseInt(value)
// var wordToNumType = typeof(wordToNum)
// document.write("Value: " + value + "<br>Type: " + valueType + "<br>Value: " + wordToNum + "<br>Type: " + wordToNumType)


// -------- Task # 10 --------
// var userInput = prompt("Enter Text", "peanuts")
// var converted = userInput.toUpperCase()
// document.write("User input: " + userInput + "<br>Upper case: " + converted)


// -------- Task # 11 --------
// var userInput = prompt("Enter Text", "javascript")
// var x = userInput.slice(0,1).toUpperCase()
// var y = userInput.slice(1).toLowerCase()
// var converted = x + y
// document.write("User input: " + userInput + "<br>Title case: " + converted)


// -------- Task # 12 --------
// var num = 35.36 ;
// var numToword = num.towording()
// var result = numToword.replace(".","")
// document.write("Number: " + num + "<br>Result: " + result)


// -------- Task # 13 --------  
// var userName = prompt("Enter your name")
// var match = true
// for (i = 0; i <= userName.length; i++) {
//     var a = userName.charCodeAt(i)
//     if (a == 33 || a == 44 || a == 46 || a == 64) {
//         match = false
//         alert("Please enter a valid username")
//     }
// }
// if (match === true) {
//     alert("Username "+ userName + " is stored")
// }


// -------- Task # 14 --------
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("Welcome to ABC Bakery, What do you want to order Sir/Ma'am?")
// var b = userInput.toLowerCase()
// var match = true
// for (i = 0; i < a.length; i++) {
// if (b === a[i]) {
//     match = false
//     document.write(userInput + " is <wordong>availabe <wordong> at Index " + i + " in our bakery")
// }  
//         }
// if (match === true) {
//     document.write("We're sorry. " + userInput + " is <wordong> not availabe <wordong> in our bakery")
// }


// -------- Task # 15 --------
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// -------- Task # 16 -------- 
// var university = "University of Karachi";
// var a = university.split("")
// var b = a.join("<br>")
// document.write(b)


// -------- Task # 17 --------
// var userInput = prompt("Enter Text", "Pakistan")
// var lastChar = userInput.charAt(userInput.length-1)
// document.write("User input: " + userInput + "<br>Last character of imput: " + lastChar)


// -------- Task # 18 --------
// var txt = "The quick brown fox jumps over the lazy dog"
// var txtLower = txt.toLowerCase()
// var count = (txtLower.match(/the/g)).length;
// document.write("Text: " + txt + "<br>There are " + count + " occurrence(s) of word 'the'")

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------



// -------- Chapter # 26 - 30: MATH METHODS --------

// -------- Task # 01 --------
// --a 
// var a = prompt("enter any positive number")
// // --b 
// b = Math.round(a)
// // --c 
// c = Math.floor(a)
// // --d 
// d = Math.ceil(a)
// document.write("number: " + a + "<br>round off value of: " + b + "<br>floor value: " + c + "<br>ceil value: " + d)


// -------- Task # 02 --------
// var num = prompt("enter any negative floating point number")
// // --a 
// a = -Math.abs(num)
// // --b 
// b = Math.round(a)
// // --c 
// c = Math.floor(a)
// // --d 
// d = Math.ceil(a)
// document.write("number: " + a + "<br>round off value of: " + b + "<br>floor value: " + c + "<br>ceil value: " + d)


// -------- Task # 03 --------
// var num1 = -4
// num1abs = Math.abs(num1)
// var num2 = 5
// num2abs = Math.abs(num2)
// document.write("The absolute value of " + num1 + " is " + num1abs + "<br>The absolute value of " + num2 + " is " + num2abs)


// -------- Task # 04 --------
// var a = Math.floor(Math.random() * 6)  + 1; 
// document.write("Random dice value: " + a)


// -------- Task # 05 --------
// var a = Math.floor(Math.random() * 2) + 1;
// if (a === 2) {
//     document.write(+ a + "<br> random coin value: Tails")
// }
// else {
//     document.write(+ a + "<br> random coin value: Heads")
// }


// -------- Task # 06 --------
// var a = Math.floor(Math.random() * 101); 
// document.write("Random number between 1 - 100 is: " + a)


// -------- Task # 07 --------
// var userWeight = prompt("enter weight in kilograms")
// b = userWeight.replace("kilograms" , " ")
// b = userWeight.replace("kgs" , " ")
// document.write("The weight of user is: " + b +  " kilograms")


// -------- Task # 08 --------
// var randomNumber = Math.floor(Math.random() * 10) + 1;
// var userValue = prompt("Enter a number between 1 - 10")
// if(userValue == randomNumber){
//     alert("Congratulation! \nYou have the correct number")
// }
// else{
//     alert("try again") 
// }

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


// -------- Chapter # 31 - 34: DATE METHODS --------

// -------- Task # 01 --------
// var a = new Date();
// document.write(a)


// -------- Task # 02 --------
// var months = ["January","February","March","April","May","June","July","August", "September","October","November","December"]
// var a = new Date();
// var b = months[a.getMonth()];
// document.write("Current month: " + b)


// -------- Task # 03 --------
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var a = new Date();
// var b = days[a.getDay()];
// document.write("Today is " + b.slice(0,3))


// -------- Task # 04 --------
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var a = new Date();
// var b = days[a.getDay()];
// if(b === "Saturday" || "Sunday"){
//     document.write("It's fun day")
// }


// -------- Task # 05 --------
// var a = new Date();
// var b = a.getDate();
// if(b >= 1 && b <=15){
//         document.write("First fifteen days of the month")
// }
// else if(b >= 16 && b <= 31){
//     document.write("Last days of the month")
// }


// -------- Task # 06 --------
// var a = new Date()
// var b = a.getTime()
// var c = b/1000*60
// document.write("Current date: " + a + "<br> Elapsed miliseconds since January 1, 1970: " + b + "<br> Elapsed minutes since January 1, 1970: " + c + "")


// -------- Task # 07 --------
// var a = new Date();
// var b = a.getHours();
// if(b >= 00 && b <=11){
//         document.write("Its AM")
// }
// else if(b >= 12 && b <= 23){
//     document.write("Its PM")
// }


// -------- Task # 08 --------
// var a = new Date();
// var b = a.getMonth()
// a.setMonth(b-1,30);
// document.write("Later date: " + a)


// -------- Task # 09 --------
// var ramadanstartDate = new Date("June 18, 2015")
// var miliseconds = ramadanstartDate.getTime()
// var today = new Date()
// var todaymili = today.getTime()
// var getdiff = todaymili - miliseconds
// var convertToDays = getdiff/(1000*60*60*24)
// var accurateVal = Math.floor(convertToDays)
// alert("" + accurateVal + " days have passed since 1st Ramadan, 2015")


// -------- Task # 10 --------
// var setDate = new Date("December 05, 2015")
// var mSeconds = setDate.getTime()
// var today = new Date()
// var todaymili = today.getTime()
// var getdiff = todaymili - mSeconds
// var convertToSec = Math.floor(getdiff/(1000))
// document.write("On reference date " + setDate + "<br>" + convertToSec + " seconds had passed since beginning of 2015")


// -------- Task # 11 --------
// var currentDate = new Date();
// var a = new Date();
// a.setHours(a.getHours() - 1);
// document.write("Current date: " + currentDate  + "<br> <br> 1 hour ago, it was: " + a )


// -------- Task # 12 --------
// var currentDate = new Date();
// var a = new Date();
// a.setFullYear(a.getFullYear() - 100);
// document.write("Current date: " + currentDate  + "<br> 100 years back, it was " + a )


// -------- Task # 13 --------
// var userInput = prompt("Enter your year of birth","June 18, 1997")
// var userDob = new Date(userInput)
// var a = userDob.getTime()
// var b = new Date()
// var c = b.getTime()
// var getdiff = c - a
// var userYear = userInput.slice(-4);
// var convertToDays = getdiff/(1000*60*60*24*30*12)
// var accurateVal = Math.floor(convertToDays)
// document.write("Your age is " + accurateVal + "<br>Your birth year is "  +  userYear)


// -------- Task # 14 --------
// // --a 
// var customerName = "ABC Customer"
// // --b 
// var month = "February"
// // --c 
// var numOfUnit = 410
// // --d 
// var chargPerUnit = 16
// // --e 
// var netAmountDueDate = numOfUnit * chargPerUnit
// // --f
// var latePaySurcharge = 350
// // --g
// var grossAmountAfterDueDate = netAmountDueDate + latePaySurcharge
// document.write("<h1>K-Electric Bill</h1>")
// document.write("Customer Name: <wordong>" + customerName  + "</wordong><br>Current Month: <wordong>" + month   +  "</wordong><br>Number of units: <wordong>" + numOfUnit  + "</wordong><br>Charges per unit: <wordong>" + chargPerUnit  + "</wordong><br><br>Net Amount Payable (within Due Date): <wordong>" + netAmountDueDate  +  "</wordong><br>Late Payment Surcharge: <wordong>" + latePaySurcharge  + "</wordong><br>Gross Amount Payable (after Due Date): <wordong>" + grossAmountAfterDueDate  +  "</wordong>")

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------


// -------- Chapter # 35 - 38: FUNCTION --------

// -------- Task # 01 --------
// function currentDate(){
//     document.write(new Date)
// }
// currentDate()


// -------- Task # 02 --------
// function greeting(){
//     firstName = prompt("Enter first name")
//     lastName = prompt("Enter last name")
//     alert("Hello! " + firstName + " " + lastName )
// } 
// greeting()


// -------- Task # 03 --------
// function sumOf(){
//     var num1 = prompt("Enter first Value")
//     var num2 = prompt("Enter second Value")
//     var sum = num1 + num2
//     return sum
// }
// alert(sumOf())


// -------- Task # 04 --------
// function calculateVaules(num1, num2, operator){
//     var num1;
//     var num2;
//     var operator;
//     var result = eval(num1 + operator + num2)
//     return result
// }
// alert(calculateVaules(3,20,"*"))


// -------- Task # 05 --------
// function squreNum(num) {
//     var result = num * num
//     return result
// }
// alert(squreNum(5))


// -------- Task # 06 --------
// function factorial(value) {
//     return (value != 1) ? value * factorial(value - 1) : 1;
//   }
//   alert( factorial(8) )


// -------- Task # 07 --------
// function counting(startNum, endNum){
//     var startNum;
//     var endNum;

//     for (i = startNum; i <= endNum; i++) {
//         document.write(i + ", ")
//     }
// }
// counting(11,100)


// -------- Task # 08 --------
// function RAT(){

//     var base = +prompt("Enter base")
//     var perpendicular = +prompt("Enter perpendicular")

//     baseSq = base * base
//     perpendicularSq = perpendicular * perpendicular

//     var hypotenuseSq = baseSq + perpendicularSq
//     return hypotenuseSq

// }

// console.log(RAT())


// -------- Task # 09 --------
// -- i 
// function areaOfRect(x,y) {
//     return x * y

// }
// alert(areaOfRect(20,30))

// // -- ii
// x = 20
// y = 10
// alert(areaOfRect(x,y))


// -------- Task # 10 --------
// function checkWord(word) {
//     a = word.split("")
//     b = a.reverse()
//     if (b == a) {
//         c = word + " is a palindrome word"
//     }
//     else {
//         c = word + " is not a palindrome word"
//     }
//     return c
// }
// checkWord("madam")


// -------- Task # 11 --------
// function titleCase(str) {
//     str = "the quick brown fox";
//     var words = str.split(" ");

//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//     }

//     var a = words.join(" ");
//     return a
// }
// alert(titleCase("the quick brown fox"))


// -------- Task # 12 --------
// function longestWord(word)
// {
//   var arr = word.split(" ");
//   var result = arr[0];
//   for(var i = 1 ; i < arr.length ; i++)
//   {
//     if(result.length < arr[i].length)
//     {
//     result = arr[i];
//     } 
//   }
//   return result;
// }

// console.log(longestWord("Web Development Tutorial"))


// -------- Task # 13 --------
//     function letterCount(string, letter) {
//         count = 0
//         for (i = 0; i <= string.length; i++) {
//             if (string[i] == letter) {
//                 count += 1
//             }
//         }
//         return count
//     }
// console.log(letterCount("JSResourceS.com", "o"))



// -------- Task # 14 --------
// ---------- Circumference Calculation Function ----------
// function calcCircumference(radius) {
//     circumference = (2*(22/7)*(radius))
//     result = "The circumference is: " + circumference
//     return result
// }
// console.log(calcCircumference(48.16))

// ---------- Area of Circle Calculation Function ----------
// function calcArea(radius) {
//     area = ((22/7)*(radius*radius))
//     result = "The area is " + area 
//     return result
// }
// console.log(calcArea(48.16))

// ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------ xxxxxxxxxxxx ------------



// -------- Chapter # 35 - 38: FUNCTION --------
// -------- Task # 1 --------
// function powerCalc(base,power){
//     result = base ** power
//     return result
// }
// console.log(powerCalc(5,3))


// -------- Task # 2 --------
// function checkLeapYear(year){
//     year = +prompt("Enter year")
//     if(year %4 === 0){
//         result = year + " is a leap year"
//     }
//     else{
//         result = year + " is not a leap year"
//     }
//     return result
// }
// alert(checkLeapYear())


// -------- Task # 3 --------
// function area(a,b,c){
//     s = (a + b + c )/2;
//     d = (s*(s-a)*(s-b)*(s-c))
//     return d
// }
// alert(area(2,5,9))


// -------- Task # 4 --------
// function result(sub1, sub2, sub3) {
//     sub1 = +prompt("Enter first Subject Marks")
//     sub2 = +prompt("Enter Second Subject Marks")
//     sub3 = +prompt("Enter Third Subject Marks")
//     total = sub1 + sub2 + sub3

//     average = (total / 3).toFixed(2)
//     percentage = ((total / 300) * 100).toFixed(2)

//     document.write("Average marks: " + average + "<br> Percentage: " + percentage + "%")

// }
// result()


// -------- Task # 5 --------
// function ofindex(a, findInd) {
//     arr = a.split("")
//     for (i = 0; i >= arr.length; i++) {
//         console.log(i)
//         if (findInd == arr[i]) {
//             result = i
//         }
//     }
// }

// -------- Task # 10 --------
// function cashCount(amount){
// hundred = 0;
// fifty = 0;
// ten = 0;


// amount = prompt("Enter amount to withdraw!!")
// if (amount < 1000 && amount >= 100) {
//     hundred = Math.floor((amount / 100))
//     a = amount % 100
//     if (a < 100 && a >= 50) {
//         fifty = Math.floor((a / 50))
//         b = a % 50
//         if (b <=40 ) {
//             ten = Math.floor((b / 10))
//             c = b % 10
//         }
//     }
// }
//  result = "You will have " + hundred + " hundred notes " + fifty +  " fifty notes " + ten +  " ten notes. "
//  return result

// }

// document.write(cashCount())