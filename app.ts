const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

type numOrString = number|string;
interface ResultObj { 
        val: number;
        timestamp:Date
}
function add(num1: numOrString, num2: numOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1+num2
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1+ " " + num2;
    }
      return +num1 + +num2;
}
function forObjects(object: ResultObj){
    console.log(object.val, object.timestamp);
}

let numArray: number[] = [];
let textArray: string[] = [];
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    
    const numResult = add(+num1,+num2);
    numArray.push(numResult as number)
    const textResult = add(num1,num2);
    textArray.push(textResult as string);
    console.log(numArray, textArray);
    forObjects({val: numResult as number, timestamp: new Date()});
})