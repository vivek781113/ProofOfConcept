import { swapTwoNumbers } from './array';
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<h1>Hello Vite!</h1>
<a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
<button id='btnFuncExec'>Execute Function</button>
`

const funcRunner = () => {
  console.log('funcRunner called');
  swapTwoNumbers();
};

const btnExecutor = document.getElementById('btnFuncExec');
btnExecutor?.addEventListener('click', funcRunner);




