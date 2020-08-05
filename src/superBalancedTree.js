// https://www.interviewcake.com/question/javascript/balanced-binary-tree?course=fc1&section=trees-graphs

// class BinaryTreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insertLeft(value) {
//     this.left = new BinaryTreeNode(value);
//     return this.left;
//   }

//   insertRight() {
//     this.right = new BinaryTreeNode(value);
//     return this.right;
//   }
// }

function isSuperBalanced(tree) {
  const stack = [[tree, 0]]; // For DFS traversal
  const levels = []; // Levels of leaf nodes seen so far

  // Do DFS traversal
  while (stack.length > 0) {
    const [node, level] = stack.pop();
    const isLeafNode = !node.left && !node.right;

    if (isLeafNode) {
      if (levels.length === 0) {
        levels.push(level);
      } else if (levels.length === 1) {
        if (Math.abs(level - levels[0]) > 1) {
          return false;
        } else {
          levels.push(level)
        }
      } else if (levels.length === 2) {
          if (level !== levels[0] && level !== levels[1]) {
            return false;
          }
      }
    } else {
      if (node.right) {
        stack.push([node.right, level + 1]);
      }

      if (node.left) {
        stack.push([node.left, level + 1]);
      }
    }
  }
  return true;
}

// TODO Slightly different solution with minLevel and maxLevel
