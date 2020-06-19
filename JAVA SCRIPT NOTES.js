JAVA SCRIPT NOTES





// Count occurences of a word 


let textBoxWord = textBox.value.toLowerCase();
  function countOccurences(string, word) {
    return string.split(word).length - 1;
 }
 var text=sentence.innerText.toLowerCase();
 var count=countOccurences(text,textBoxWord);
 alert ('The word "'+textBoxWord.toUpperCase()+'" shows up ' + count + ' times.');


//  textboxword is the word being searched, sentence.innerText is the text you are looking through for said 
//  word. and alert shows how it is to function


// find whether a word appears in text
if (sentence.innerText.toLowerCase().includes(textBox.value.toLowerCase())){

  

    searchResults.innerHTML=("found!")
  } else {
    
    
    searchResults.innerHTML=("nope!")}
//   sentence.innerText is sentences looking through, textbox.value is word in question that was typed, lowercase 
//  everything so make it easier. searchResults.innerHTML changes in the id within html


// audio
// below is finding the id of audio file within html
const swishSound = document.getElementById("swish")
//  below has a function waiting for click to play the audio 
resetButton.addEventListener("click", function () {
    swishSound.play(); })


// If the counter drops below 10, change the text color to black:
            if(newCounterValue < 9){
                counter.style.color = "black";
              }


// counter starts at 1, const states counterisperefect square if it equals a number, that is an
// an integer, doing math(.squareroots(starting at counter 5))

let counter5 = 1
while (counter5 <=100){

 const counterIsPerfectSquare = Number.isInteger(Math.sqrt(counter5))
  if(counterIsPerfectSquare)  
  console.log(counter5)
    counter5 +=1
}



// arrays

// word below is where we will look for letter in this case z
let word = 'rhetorically'; 
let letter = 'z'; 
let index = 0;
let letterCount= 0;
const body = document.querySelector("body");
// while loop to search the word[index being the number of the letter starting with 0]
// logging to console to verify code is working
// word.length will go to the last letter in the length'
// x is the letter associated with index number
// if states if x =letter then count it
while (index < word.length){
   let x = word[index];
   index ++;
   console.log(index);
   if (x === letter){
      letterCount += 1;
   }
   
}
// below shows if we have a letter that matches count will be greater then or equal to 1,
// add the letter bla blah blha to the body.innnerhtml if not then add its not there
console.log(letterCount);
if (letterCount >= 1){
   body.innerHTML = ('<p>the letter '+ letter + ' is here ' + letterCount + " times. </p>")
   } else {
      body.innerHTML = ('<p>the letter '+ letter + ' is not here . </p>')
   } 
   
  //  more array notes

  let mountains =[10002, 25000,320, 51648,7842,100021, 540]
let largest = Math.max.apply(Math, mountains);
console.log(largest)
let smallest = Math.min.apply(Math, mountains);
console.log(smallest)

// Math.max.apply(Math, mountains) saying look for the largest number in the moutainsarray
// .min.apply is looking for smallest number in array (no affect on strings)

// more array, this time get rid of duplicates


*/
const body = document.querySelector("body");
const redundantArray = [1, 1, 2, 3, 3, 4,'apple','apple','banna']
// ^starting array with duplicates
const array = Array.from(new Set(redundantArray));
// creating new array minus duplicates^

console.log(array)
body.innerHTML = '<p>this is stupid ' + redundantArray
+ ' but this is better ' + array + ' </p> ' ;



// .reduce ab takes the numbers within the array and adds them together 0 is starting value
totalAmount= (
   diceRolls.reduce((a, b) => a + b, 0));


// for loops and while loops

i=0;
while(i<10){
   console.log(i)
   i++
}
// for, first code runs once, second is determing, last code runs at end of list in this 
// example ends after console.log(i)
for(i=0;i<10; i++){
   console.log(i)
}

// functions

function name(variable){
   return variable+variable
}
// function to return if vowel
function containsVowel(x){
   return['a','e','i','o','u'].indexOf(x.toLowerCase()) !==-1
}
// function to round to nearest dollar and then round up for tip
function tip(x){
   y=Math.round(x)
   z=y*.2
   return Math.ceil(z)
}
console.log('kata 6:', tip(20)
)
console.log('kata 6:', tip(57))
console.log('kata 6:', tip(32))

// making a function to input things into html
// X would be the html item ex h2,div,li,ect
// y would be the stuff between it >hello world<
function html(x,y){
   return '<'+ x +'>' + y + "</" + x +'>'
}
// arrow function

function createsurprise(string){
   result=(string + ' Boo!')
return result
}
console.log(createsurprise('you are great!'))
// below arrow function
 const arrowcreatesurprise = (string)=>{
    return (string + ' Boo!')
 
 }
// arrow function aswell with only 1 var
// can all be one line like so all are the same as top function
 let arrowcreatesurprise = string => string + ' Boo!'

 function findShort(string){
let newArray=string.split(' ')
let result= 0
let shortestword=100
for(index= 0;index<newArray.length;index+=1){
 let currentWord=newArray[index]
  let currentwordlength=currentWord.length
// console.log(newArray[index].length)
if(currentwordlength<shortestword){
 
   // console.log(num)
shortestword=currentwordlength}else{}

}

return shortestword}

console.log(findShort('hello world i am here'))
function removeDuplicateWords (string) {
   let orignialArray=string.split(' ')
   let newArray=[]
   for(let index=0;index<orignialArray.length;index+=1){
     let word= orignialArray[index]
     if(newArray.includes(word)) {}
     else{console.log(hello)
   }
   }}
function pattern(n){
   var output="";
   let array=[]
   if(n<1){}else{
       for(let index=1;index<=n;index+=1){
       console.log(index)
         for(let i=0;i<index;i++)
         { array.push(index) 
           }array.push('\n')
       
       }array.pop()
       output=output+array.join('')
   console.log(array)
  
   }
   
     // Happy Coding ^_^
   return output;
  }
  console.log(pattern(1))

  console.log(pattern(4))

// type of returns 'number' if number ! states not this
  function myFirstKata(a, b) {
   if (typeof a !== 'number'|| typeof b !== 'number') {
 return false ;
   } else {
     return a % b + b % a;   
   }
 }

//  adding things to html via javascript
// creating a h2 tag
const kata18heading=document.createElement('h2')
// adding tag to page(labled a section in html with class and identified it here as mainElement)
mainElement.append(kata18heading)
// adding kata 18 to the h2 tag in the document
kata18heading.append('Kata 18')

// removeing things using javascript
// labeling h1's in page
let h1header=document.querySelector('h1')
// removing h1's in document
h1header.remove()
