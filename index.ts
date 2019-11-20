// Import stylesheets
import './style.css';

function isBalanced(input: string){

    let stack = [];
    let openingBrackets = ['[', '{', '(']
    let closingBrackets = [']', '}', ')']

    for(let i=0; i < input.length; i++) {
      let c = input[i];

      if (openingBrackets.indexOf(c) > -1){
         stack.push(c);
      }else{
        let val = stack.pop();
        let matchingBrackets = openingBrackets[closingBrackets.indexOf(c)];
        
        if (val != matchingBrackets){
            return false;
        }

      }

    }

    return true;

}


let inputString = '({[]}}';
let response = isBalanced(inputString);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Input: ${inputString} result ${response}</h1>`;