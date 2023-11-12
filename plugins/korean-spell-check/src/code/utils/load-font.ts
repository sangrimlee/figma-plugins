export function loadFont(node: TextNode) {
  if (node.fontName !== figma.mixed) {
    return figma.loadFontAsync(node.fontName);
  }
  return Promise.all(
    node
      .getRangeAllFontNames(0, node.characters.length)
      .map((fontName) => figma.loadFontAsync(fontName)),
  );
}
