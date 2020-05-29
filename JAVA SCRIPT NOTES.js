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