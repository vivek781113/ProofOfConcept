import _ from 'lodash';
import {
  mergeTwoSortedArray,
  mergeTwoSortedArrayV2,
  reverseString,
  reversStringOneLiner
} from './array';
import { MyArray } from './array/myArray';
import { BinarySearchTree } from './binarytree/binarySearchTree';
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<h1>Hello Vite!</h1>
<a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
<button id='btn_main'>Execute Function</button>
`

const main = () => {

  console.log(`---In Main Method -----`);

  myArrayImplementaionTest();
  console.log(reverseString('string'));
  console.log(reverseString('priya'));
  console.log(reversStringOneLiner('vivek'));
  console.log(reversStringOneLiner('tiwary'));
  console.clear();
  console.log(mergeTwoSortedArray([1, 3], [2, 4]));
  console.log(mergeTwoSortedArray([1, 3, 5], [2, 4, 6]));
  console.log(mergeTwoSortedArray([10, 17, 99], [18, 55]));
  console.log(mergeTwoSortedArrayV2([10, 17, 99], [18, 55]));
  console.log(mergeTwoSortedArray([1, 2, 5], [3, 4, 8, 10]));
  console.log(mergeTwoSortedArrayV2([1, 2, 5], [3, 4, 8, 10]));
  console.clear();
  const bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(4);
  bst.insert(2);
  bst.insert(3);
  bst.insert(12);
  bst.insert(8);
  bst.insert(7);
  bst.insert(14);
  bst.insert(1);
  bst.insert(19);
  console.log(JSON.stringify(bst.root));
  bst.delete(2);
  console.log(JSON.stringify(bst.root));
  bst.delete(14);
  console.log(JSON.stringify(bst.root));

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