import { swapTwoNumbers } from './array';
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<h1>Hello Vite!</h1>
<a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
<button id='btn_main'>Execute Function</button>
`

const main = () => {
  console.log('funcRunner called');
  swapTwoNumbers(4, 5);
};

const main_btn = document.getElementById('btn_main');
main_btn!.addEventListener('click', main);




