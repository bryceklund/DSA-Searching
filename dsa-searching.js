function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == item) {
            return i
        }
        return -1
    }
}

function binarySearch(array, value, start=0, end=array.length) {
    if (start > end) {
        return -1
    }
    const index = Math.floor((start + end) / 2)
    const item = array[index]

    console.log(`Searching within bounds ${start} and ${end}...`)

    if (item == value) {
        console.log(`Found ${item} at index ${index}!`)
        return index
    } else if (item < value) {
        return binarySearch(array, value, index + 1, end)
    } else if (item > value) {
        return binarySearch(array, value, start, index - 1)
    }
}

function dfsInOrder(tree, values=[]) {
    if (tree.left) {
        values = dfsInOrder(tree.left, values)
    }
    values.push(tree.key)
    if (tree.right) {
        values = dfsInOrder(tree.right, values)
    }
    return values
}

function dfsPreOrder(tree, values=[]) {
    values.push(tree.key)
    if (tree.left) {
        values = dfsPreOrder(tree.left, values)
    }
    if (tree.right) {
        values = dfsPreOrder(tree.right, values)
    }
    return values
}

function dfsPostOrder(tree, values=[]) {
    if (tree.left) {
        values = dfsPostOrder(tree.left, values)
    }
    if (tree.right) {
        values = dfsPostOrder(tree.right, values)
    }
    values.push(tree.key)
    return values
}

function bfs(tree, values=[]) {
    const queue = []
    const node = tree.root
    queue.push(node)
    while (queue.length) {
        const node = queue.shift()
        values.push(node.value)
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return values
}

const list = [25,15,50,10,24,35,70,4,12,18,31,44,66,90,22]
binarySearch(list, 8) //this will take one step => half the list is 11-12, round down to 11, 8 is under 11, decrement end bound, land on 8
const BinarySearchTree = require('../DSA-BST/bst.js')
const BST = new BinarySearchTree()
list.forEach(n => BST.insert(n))

console.log(`pre-order: ${dfsPreOrder(BST)}`)
console.log(`in-order: ${dfsInOrder(BST)}`)
console.log(`post-order: ${dfsPostOrder(BST)}`)