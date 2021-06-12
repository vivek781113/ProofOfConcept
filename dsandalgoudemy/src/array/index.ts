//LOOKUP/ACCESS O(1)
//PUSH O(N)
//INSERT O(N)
//DELETE O(N)

import * as _ from 'lodash';


const reverseString = (str: string): string => {
    if (!str || str.length === 0)
        return 'bad request';
    let charArray = str.split('');
    const n = charArray.length - 1;
    let startIndex = 0;
    let endIndex = n;
    while(startIndex <= endIndex) {
        let firstEl = charArray[startIndex];
        let endEl = charArray[endIndex];
        charArray[startIndex] = endEl;
        charArray[endIndex] = firstEl;
        startIndex++;
        endIndex--;
    }

    return charArray.join('');

}

const reversStringOneLiner = (str: string) => [...str].reverse().join('');


export { reverseString, reversStringOneLiner };