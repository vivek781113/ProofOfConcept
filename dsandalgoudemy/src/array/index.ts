//LOOKUP/ACCESS O(1)
//PUSH O(1)
//INSERT O(N)
//DELETE O(N)

import * as _ from 'lodash';

/**
 * 
 * @param num1 
 * @param num2 
 */
const swapTwoNumbers = (num1: number, num2: number) => {
    console.log(`${num1} has to swapped with ${num2}`);
    console.log(_.fill([4, 6, 8, 10], '*', 1, 3));

}




export { swapTwoNumbers };