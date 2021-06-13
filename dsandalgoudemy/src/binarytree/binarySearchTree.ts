//LOOKUP/ACCESS O(LOGN)
//INSERT O(LOGN)
//DELETE O(LOGN)

import { min } from "lodash";


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
    lookup = (data: any): boolean => {
        if (!this.root)
            return false;
        let tempNode = this.root;
        while (true) {
            if (tempNode.data === data)
                return true;
            else {
                if (data <= tempNode.data && tempNode.left) {
                    tempNode = tempNode.left;
                } else if (data <= tempNode.data && !tempNode.left) {
                    return false;
                } else if (data > tempNode.data && tempNode.right) {
                    tempNode = tempNode.right;
                } else {
                    return false;
                }
            }
        }
    }
    delete = (data: any): boolean => {

        if (!this.root)
            return false;

        while (true) {
            let currentNode: TreeNode | null = this.root;
            let tempParentNode: TreeNode | null = null;
            if (data < currentNode?.data && currentNode?.left) {
                tempParentNode = currentNode;
                currentNode = currentNode.left;
            } else if (data < currentNode?.data && !currentNode?.left) {
                return false;
            } else if (data > currentNode?.data && currentNode?.right) {
                tempParentNode = currentNode;
                currentNode = currentNode.right;
            } else if (data > currentNode?.data && !currentNode?.right) {
                return false;
            } else {
                // this block will execture when we found the data
                //case 1 
                //if its a leaf node
                if (!currentNode?.left && !currentNode?.right) {
                    if (!tempParentNode)
                        this.root = null;
                    else if (tempParentNode!.left?.data === currentNode?.data) {
                        tempParentNode!.left = null;
                    }
                    else {
                        tempParentNode!.right = null;
                    }
                }
                // case 2
                // if left node not exist
                else if (!currentNode.left && currentNode.right) {
                    if (!tempParentNode)
                        this.root = currentNode.right;
                    else if (tempParentNode!.left?.data === currentNode.data) {
                        tempParentNode!.left = currentNode.right;
                    } else {
                        tempParentNode!.right = currentNode.right;

                    }
                }
                // case 3
                // if right node not exist
                else if (currentNode.left && !currentNode.right) {
                    if (!tempParentNode)
                        this.root = currentNode.left;
                    else if (tempParentNode!.left?.data === currentNode.data) {
                        tempParentNode!.left = currentNode.left;
                    } else {
                        tempParentNode!.right = currentNode.left;

                    }
                } else {
                    let successorNodeData = this.getMinimumData(currentNode);
                    this.delete(successorNodeData);
                    currentNode.data = successorNodeData;
                }
                return true;
            }
        }

    }

    getMinimumData = (node: TreeNode): any => {
        while (true) {
            if (node.left) {
                node = node.left;
            }
            else {
                return node.data;
            }
        }
    }

}
