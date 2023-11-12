import { isTextNode } from './check-node';
import { visit } from './visit';

export function findAllTextNode(nodes: readonly SceneNode[]): TextNode[] {
  const textNodes: TextNode[] = [];
  for (const rootNode of nodes) {
    for (const node of visit(rootNode)) {
      if (isTextNode(node)) {
        textNodes.push(node);
      }
    }
  }
  return textNodes;
}
