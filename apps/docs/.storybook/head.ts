export const managerHead = (head: string) => {
  return `
    ${head}
    <meta property="og:title" content="Design System" />
    <meta
      property="og:description"
      content="Design System for Figma Plugins."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="/styles/manager.css" rel="stylesheet" />
  `;
};

export const previewHead = (head: string) => {
  return `
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  `;
};
