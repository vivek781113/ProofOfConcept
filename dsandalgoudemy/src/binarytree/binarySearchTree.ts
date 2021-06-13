//LOOKUP/ACCESS O(LOGN)
//INSERT O(LOGN)
//DELETE O(LOGN)


class TreeNode {
    left: TreeNode | null;
    right: TreeNode | null;
    data: any;
    constructor(data: any) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    root: TreeNode | null;
    constructor() {
        this.root = null;
    }
    insert = (data: any): void => {
        const newNode = new TreeNode(data)
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            let tempNode = this.root;
            while (true) {
                if (newNode.data <= tempNode.data && tempNode.left) {
                    tempNode = tempNode.left;
                } else if ((newNode.data <= tempNode.data && !tempNode.left)) {
                    tempNode.left = newNode;
                    return;
                }
                else if (newNode.data > tempNode.data && tempNode.right) {
                    tempNode = tempNode.right;

                } else {
                    tempNode.right = newNode;
                    return;
                }
            }

        }
    }
}
