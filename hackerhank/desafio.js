function preOrder(root) {
  const list = []

  function pushToList(node) {
    list.push(node.data)

    if (node.left) {
      pushToList(node.left)
    }

    if (node.right) {
      pushToList(node.right)
    }
  }
  
  pushToList(root)
  
  console.log(list.join(' ')) 
}
