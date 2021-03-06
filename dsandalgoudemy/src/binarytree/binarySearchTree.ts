
//#region  Conceptual notes
//LOOKUP/ACCESS O(LOGN)
//INSERT O(LOGN)
//DELETE O(LOGN)

// A Tree having N node will have N-1 EDGE (one for each except the root node)

// Depth: depth of node x = length of path from root to x or no of edges from path to x
// depth of root node = 0

// Height: Number of edges in longest path from x to leaf
// height of leaf node = 0

// Height of tree: Height of root node

// A binary tee where each node can maximum two node
// Applications storing natually hierarchical data (file system), organize data for quick search insertion/deletion (BST), Trie(dictionary), Network routing algorithm

// Maximum number of nodes n in binary tree with height h = 2^0 + 2^1 + 2^2 + ....+ 2^h = 2^(h+1) -1
// => n = 2^(h+1) -1

// Height of empty tree = -1
// Height of tree with only root node = 0

//#endregion
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

        let currentNode: TreeNode | null = this.root;
        let tempParentNode: TreeNode | null = null;

        while (true) {
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
                }
                //case 
                //if bothe left and right node exist
                else {
                    let successorNodeData = this.findMinimumData(currentNode);
                    this.delete(successorNodeData);
                    currentNode.data = successorNodeData;
                }
                return true;
            }
        }

    }
    findMinimumData = (node: TreeNode): any => {
        while (true) {
            if (node.left) {
                node = node.left;
            }
            else {
                return node?.data;
            }
        }
    }
    findMaximumData = (node: TreeNode): any => {
        if (node) {
            if (node.right) {
                this.findMaximumData(node.right);
            } else {
                return node.data;
            }
        }
        else {
            return -1;
        }
    }
    findHeight = (node: TreeNode): any => {
        let leftHeight: number = 0;
        let rightHeight: number = 0;
        let tempLeftNode: null | TreeNode = node;
        let tempRightNode: null | TreeNode = node;
        while (tempLeftNode || tempRightNode) {

            if (tempLeftNode?.left) {
                tempLeftNode = tempLeftNode.left;
                leftHeight++;
            } else if (tempLeftNode?.right) {
                tempLeftNode = tempLeftNode.right;
                leftHeight++;
            }
            else if (!tempLeftNode?.left && !tempLeftNode?.right) {
                tempLeftNode = null;
            }
            if (tempRightNode?.right) {
                tempRightNode = tempRightNode.right;
                rightHeight++;
            } else if (tempRightNode?.left) {
                tempRightNode = tempRightNode.left;
                rightHeight++;
            } else if (!tempRightNode?.right && !tempRightNode?.left) {
                tempRightNode = null;
            }
        }
        return Math.max(leftHeight, rightHeight);

    }
    levelOrderTraversal = (node: TreeNode) => {
        const result: any = [];
        if (!node)
            return result;
        const nodeQueue = [];
        nodeQueue.push(node);
        while (nodeQueue.length) {
            let peek: TreeNode = nodeQueue[0];
            if (peek.left) {
                nodeQueue.push(peek.left);
            }
            if (peek.right) {
                nodeQueue.push(peek.right);
            }
            result.push(peek.data);
            nodeQueue.shift();
        }
        return result;
    }

    /**
     * Time complexity: O(n)
     * Space Complexity: O(h) => height of tree
     *              worst: O(n)
     *              Best/Avg: O(logn)
     * @param node 
     * @returns 
     */
    preOrderTraversal = (node: TreeNode): void => {
        if (!node)
            return;
        console.log(this.root?.data);
        if (node.left)
            this.preOrderTraversal(node.left);
        if (node.right)
            this.preOrderTraversal(node.right);
    }
    inOrderTraversal = (node: TreeNode): void => {
        if (!node)
            return;
        if (node.left)
            this.inOrderTraversal(node.left);

        console.log(this.root?.data);

        if (node.right)
            this.inOrderTraversal(node.right);
    }
    postOrderTraversal = (node: TreeNode): void => {
        if (!node)
            return;
        if (node.left)
            this.postOrderTraversal(node.left);

        if (node.right)
            this.postOrderTraversal(node.right);

        console.log(this.root?.data);
    }

}
