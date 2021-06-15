import { BinarySearchTree } from "./binarySearchTree";

const createBst = (): BinarySearchTree => {
    const bst = new BinarySearchTree();
    [9, 10, 4, 6, 7, 16, 18, 2, 3, 1, 55].forEach((value: number) => {
        bst.insert(value);
    });

    return bst;
};


it('insert element to binary search tree', () => {
    const bst = createBst();
    expect(bst.lookup(10)).toBeTruthy();
});