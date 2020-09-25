import {add, subtract} from './mathUtils.js';

const sumResults = document.getElementById('sum-result');
const input1a = document.getElementById('add-first');
const input2a = document.getElementById('add-second');

export function addClicks(){
    const value1a = input1a.valueAsNumber;
    const value1b = input2a.valueAsNumber;
    const sum = add(value1a, value1b);
    sumResults.textContent = sum;
}


const differenceResults = document.getElementById('difference-result');
const input1b = document.getElementById('sub-first');
const input2b = document.getElementById('sub-second');

export function subClicks(){
    const value1b = input1b.valueAsNumber;
    const value2b = input2b.valueAsNumber;
    const difference = subtract(value1b, value2b);
    differenceResults.textContent = difference;
}