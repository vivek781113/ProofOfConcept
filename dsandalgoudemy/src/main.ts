import _ from 'lodash';
import { reverseString, reversStringOneLiner } from './array';
import { MyArray } from './array/myArray';
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<h1>Hello Vite!</h1>
<a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
<button id='btn_main'>Execute Function</button>
`

const main = () => {

  console.log(`---In Main Method -----`);

  // myArrayImplementaionTest();
  console.log(reverseString('string'));
  console.log(reverseString('priya'));
  console.log(reversStringOneLiner('vivek'));
  console.log(reversStringOneLiner('tiwary'));

};

const main_btn = document.getElementById('btn_main');
main_btn!.addEventListener('click', main);


function myArrayImplementaionTest() {
  const myArray = new MyArray();
  myArray.push('Hello');
  myArray.push('World!');
  myArray.push('!!');
  myArray.push('!!');
  myArray.push('!!');
  myArray.push('Bye');
  myArray.push('World!');

  // printMyArrayItem(myArray);

  // console.log(myArray.pop());
  // console.log(myArray.pop());

  printMyArrayItem(myArray);

  myArray.delete(2);
  myArray.delete(2);
  myArray.delete(2);

  printMyArrayItem(myArray);
}

function printMyArrayItem(myArray: MyArray) {
  console.log(`--Print Begin--`);
  _.forEach(myArray.data, (value, key) => {
    console.log(`item at index ${key} : ${value}`);
  });
  console.log(`--Print End--`);
}