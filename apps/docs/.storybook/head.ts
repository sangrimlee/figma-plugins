export const managerHead = (head: string) => {
  return `
    ${head}
    <meta property="og:title" content="Design System" />
    <meta
      property="og:description"
      content="Design System for Figma Plugins."
    />
    <link
      rel="stylesheet"
      href="/styles/manager.css"
    />
  `;
};
