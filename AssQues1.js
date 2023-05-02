
/*1)find duplicate and same values in two array
var fullWordList = ['1','2','3','4','5'];
var wordsToRemove = ['1','2','3'];*/

var fullWordList = ['1','2','3','4','5'];
var wordsToRemove = ['1','2','3'];

var newList = fullWordList.filter(function(val) {
    return wordsToRemove.indexOf(val) != -1;
  });
  
  console.log(newList);

  /*
  2)longest-chain-of-letters-in-word-javascript
const word = '00000111110101001111100001001'
 */
  
  const word = '00000111110101001111100001001'

let newWord = ' '

for (let i = 0; i < word.length; i++) {

  if (word[i] == word[i + 1]) {

    newWord += word[i] + word[i + 1]

    i++

  }

}

console.log(newWord)

/*3) let obj1 = { "greeting": "hello" };
let obj2 = obj1;
obj1["greeting"] = "Bye";
console.log(obj1);
console.log(obj2 */

let obj1 = { "greeting": "hello" };
console.log(obj1);
let obj2 = obj1;
obj1["greeting"] = "Bye";
console.log(obj1);
console.log(obj2);

/*4)console.log(7 > 7)
console.log(2>21)
console.log("KL">"S")*/
console.log(7 > 7)
console.log(2>21)
console.log("KL">"S")

/*5)function average(a, b) {
    return a + b / 2;
    }
    console.log(average(2, 1));
 */
    function average(a, b) {
        return (a + b )/ 2;
        }
        console.log(average(2, 1));

