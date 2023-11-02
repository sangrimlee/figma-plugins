import manifest from 'manifest.json';

figma.skipInvisibleInstanceChildren = true;

figma.showUI(__html__, {
  title: manifest.name,
  themeColors: true,
  width: 384,
  height: 448,
});
