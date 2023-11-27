export function isTextNode(node: SceneNode): node is TextNode {
  return node.type === 'TEXT';
}

export function isSelectTextNode() {
  return figma.currentPage.selection.some(isTextNode);
}
