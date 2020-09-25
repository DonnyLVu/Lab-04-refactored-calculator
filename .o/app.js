// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM




// const addButton = document.getElementById('sum-button');

// addButton.addEventListener('click', () => {
    
//     const input1a = document.getElementById('add-first');
//     // console.log(input1a.value);
//     const input2a = document.getElementById('add-second');
//     // console.log(input2a.value);

//     const resultSpana = document.getElementById('sum-result');

//     const firstValuea = Number(input1a.value);
//     const secondValuea = Number(input2a.value);
//     const sum = firstValuea + secondValuea;
//     // console.log(sum);
//     resultSpana.textContent = sum;
// });






// const subButton = document.getElementById('difference-button');

// subButton.addEventListener('click', () =>{
    
//     const input1s = document.getElementById('sub-first');
//     // console.log(input1s.value);
//     const input2s = document.getElementById('sub-second');
    
//     const resultSpans = document.getElementById('difference-result');

//     const firstValues = Number(input1s.value);
//     const secondValues = Number(input2s.value);
//     const difference = firstValues - secondValues;
//     // console.log(difference);
//     resultSpans.textContent = difference;
// });


const multiButton = document.getElementById('product-button');

multiButton.addEventListener('click', () =>{
    
    const input1m = document.getElementById('multi-first');
    // console.log(input1m.value);
    const input2m = document.getElementById('multi-second');
    
    const resultSpanm = document.getElementById('product-result');

    const firstValuem = Number(input1m.value);
    const secondValuem = Number(input2m.value);
    const product = firstValuem * secondValuem;
    // console.log(product);
    resultSpanm.textContent = product;
});


const divideButton = document.getElementById('goes-into-button');

divideButton.addEventListener('click', () =>{
    
    const input1d = document.getElementById('divide-first');
    // console.log(input1d.value);
    const input2d = document.getElementById('divide-second');
    
    const resultSpand = document.getElementById('goes-into-result');

    const firstValued = Number(input1d.value);
    const secondValued = Number(input2d.value);
    const divided = firstValued / secondValued;
    // console.log(divided);
    resultSpand.textContent = divided;
});

import{addClicks, subClicks} from './something.js';

const addButton = document.getElementById('sum-button');
const subtractButton = document.getElementById('difference-button');

addButton.addEventListener('click', addClicks);
subButton.addEventListener('click', subClicks);

