//                                    CHAPTER 35 TO 38
// Qno:1 Write a function that displays current date & time in your browser.
// function currentDate() {
//     let today=new Date();
//     document.write(today)
// }
// currentDate();

// Qno:2 Write a function that takes first & last name and then it greets the user using his full name.
// let firstName= prompt("Enter Your First Name");
// let lastName= prompt("Enter Your Last Name");
// function greet(Hello,firstName,lastName) {
//     return Hello+" "+ firstName +" "+ lastName
// }
// let returning=greet(" Hello ", firstName,lastName );
// document.write(returning)

// Qno:3 Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// let num1=Number(prompt("Enter Your Number"))
// let num2=Number(prompt("Enter Your Number"))
// function sum(num1,num2) {
//     let result=num1+num2
//     return result
    
// }
// let returning=sum(num1,num2);
// document.write(`This is sum ${returning}`);

// Qno:4 Calculator:
// Write a function that takes three arguments num1, num2& operator & compute the desired operation. Return andshow the desired result in your browser
// let num1=Number(prompt("Enter Your Number"));
// let operator=prompt("Enter Your Operator")
// let num2=Number(prompt("Enter Your Number"));

// function calculator(num1,operator,num2) {
//     if(operator==="+"){
//     let result=num1+num2;
//     document.write(result)
//     }
//     else if(operator==="-"){
//         let result=num1-num2;
//         document.write(result)   
//     }
//     else if(operator==="*"){
//         let result=num1*num2;
//         document.write(result)
//     }
//     else if(operator==="/"){
//         let result=num1/num2;
//        document.write(result) 
//     }
//     else if(operator==="%"){
//         let result=num1%num2;
//         document.write(result)
//     }
//     else{
//         document.write("Please Try Again")
//     }
//     return result;
// }
// let result=calculator(num1,operator,num2)
// document.write(result)

// Qno:5  Write a function that squares its argument.
// let number=Number(prompt("Enter Your Square Number"));

// function squarenum(num) {
//  return num*num
// }
// let finalResult=squarenum(number);
// document.write(finalResult);

// Qno:6 Write a function that computes factorial of a number.
// let number=Number(prompt("Enter Your factorial Number"));

// function factorial(num) {
//     let fact=1;
//     if(num===0 || num===1){
//       return 1;
//     }
//     return num*factorial(num-1)
    
// }
// document.write(factorial(number));

// Qno:7 Write a function that take start and end number as inputs & display counting in your browser.
// let startNum=Number(prompt("Enter Your start Number"));
// let endNum=Number(prompt("Enter Your End Number"));

// function numbers(start,end) {
//     for(i=start;i <= end;i++){
//         document.write(`${i} <br />`)
//     }   
// }
// numbers(startNum,endNum);

// Qno:8 Write a nested function that computes hypotenuse of aright angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// let base=Number(prompt("Enter Base of right angle triangle"));
// let perpendicular = Number(prompt('Enter perpendicular of right angle triangle'));

// function calculateHypotenuse(base,perpendicular) {
    

//     function calculatorsquare(num) {
//       num=num*num
//       return num;
//     }
//       base=calculatorsquare(base)
//       perpendicular=calculatorsquare(perpendicular)
//       let hyp=base+perpendicular;
//       return hyp;
// }
// let hyp=calculateHypotenuse(base,perpendicular);
// document.write(`The hypotenuse of right angle triangle is ${hyp}`)
      

// Qno:9 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables
// let width=Number(prompt("Enter Your Width Number"));
// let height=Number(prompt("Enter Your Height Number"));
// function areaCalculate(width,height) {
//     let A=width*height
//     return A;
// }
// let result=areaCalculate(width,height);
// document.write(result)

// // Qno:10 Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
// let word=prompt("Enter your palindrome word");
// function palindromeword(string) {
//     let result=string.split("").reverse().join("");
//     if(result==string){
//         document.write("it is a palindrome word")
//     }
//     else{
//         document.write("its is not a palindrome word")
//     }
// }
// palindromeword(word);

// Qno:11 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// let word=prompt("Enter Your first letter in uppercase");
// function firstWord(string) {
//     let firstLetter=string.split(" ")
//     let arr=[];
//     for (i=0;i<firstLetter.length;i++){
//         arr.push(firstLetter[i].charAt(0).toUpperCase()+ firstLetter[i].slice(1))   
//     }
//     return arr.join(" ")
// }
// let finalResult=firstWord(word)
// document.write(`Example  string: ${word}<br /> Expected of output: ${finalResult}`)

// Qno:12 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
 
// let word=prompt("Enter Your Word")
// function longestWord(str) {
//     let longest=str.split(" ");
//     let first=longest[0].length
    
//     for (let i = 0; i <longest.length; i++) {
        
//         if(first<longest[i].length){
//             first=longest[i]
//         }
//     }
//     return first
// }
// let finalResult=longestWord(word);
// document.write(`EXAMPLE  SRING :${word}<br /> Expected of output: ${finalResult}`)

// Qno:13 Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o' .
// let str=  "JSResourceS.com";
// let letter="o";

// function count(str,letter) {
//     let find=0;
//     for(i=0;i<str.length;i++){
//         if(str[i]===letter){
//             find +=1
//         }
//     }
//     return find;

    
// }
// let result=count(str,letter)
// document.write(`The occurence of o in this string is ${ result}`)

// Qno:14 The Geometrizer
 // Create 2 functions that calculate properties of a circle, using
 // the definitions here.
 // Create a function called calcCircumference:
 // • Pass the radius to the function.
 // • Calculate the circumference based on the radius, and output
 // "The circumference is NN".
 // Create a function called calcArea:
 // • Pass the radius to the function.
 // • Calculate the area based on the radius, and output "The area
 // is NN".
 
 // Circumference of circle = 2πr
 // Area of circle = πr2

// let radius=prompt("Enter Your Radius Of Circle");

// function calCircumference(value) {
//     let circumference=2*3.141*value
//     return circumference;
    
// }
// function calArea(value) {
//     let area=3.141*(value*value)
//     return area;
    
// }
// let circumference=calCircumference(radius)
// let area=calArea(radius);
// document.write(`The Circumference of circle is ${circumference} <br>`)
// document.write(`The Area of circle is ${area}<br>`)

//                           END OF THE CHAPTER 35 TO 38