//LOOKUP/ACCESS O(1)
//PUSH O(N)
//INSERT O(N)
//DELETE O(N)

export class MyArray {
    length: number;
    data: any;
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get = (index: number): any => this.data[index];
    push = (item: any): number => {
        this.data[this.length] = item
        this.length++;
        return this.length;
    };
    pop = (): any => {
        const lastItemIndex = this.length - 1;
        const lastItem = this.data[lastItemIndex];
        delete this.data[lastItemIndex];
        this.length--;
        return lastItem;
    }
    delete = (index: number): void => {
        // 0 1 2 3 4 => 0 1 2 3
        // a b c d e => a b d e
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}