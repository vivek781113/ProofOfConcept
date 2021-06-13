//LOOKUP/ACCESS O(LOGN)
//INSERT O(LOGN)
//DELETE O(LOGN)


class BinaryTreeNode {
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;
    data: any;
    constructor(data: any) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: BinarySearchTree | null;
    constructor() {
        this.root = null;
    }
    insert: (() => {}) | undefined;
}
