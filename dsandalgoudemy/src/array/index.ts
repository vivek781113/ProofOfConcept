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
    while (startIndex <= endIndex) {
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

const mergeTwoSortedArray = (firstArray: Array<any>, secondArray: Array<any>): Array<any> => {

    const m = firstArray.length;
    const n = secondArray.length;

    const auxArray = new Array<any>(m + n);

    if (m === 0 && n === 0)
        return auxArray;
    if (m === 0)
        return secondArray;
    if (n === 0)
        return firstArray;
    let i = 0; //pointer for first array
    let j = 0; // pointer for second array
    let k = 0; // pointer for auxArray
    for (k; k <= m + n - 1 && i <= m - 1 && j <= n - 1; k++) {
        const firstEl = firstArray[i];
        const secondEl = secondArray[j];

        if (firstEl <= secondEl) {
            auxArray[k] = firstEl;
            i++;
        } else {
            auxArray[k] = secondEl;
            j++;
        }

    }
    // not iterated through each element of first array 
    if (i != m) {
        for (let z = i; z <= m - 1; z++) {
            auxArray[k] = firstArray[z];
            k++;
        }
    }
    // not iterated through each element of second array 
    if (j != n) {
        for (let z = j; z <= n - 1; z++) {
            auxArray[k] = secondArray[z];
            k++;
        }
    }

    return auxArray;
};


const mergeTwoSortedArrayV2 = (firstArray: Array<any>, secondArray: Array<any>): Array<any> =>
    _.sortBy([...firstArray, ...secondArray], (o) => o);


export { reverseString, reversStringOneLiner, mergeTwoSortedArray, mergeTwoSortedArrayV2 };