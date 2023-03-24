import { GitHubLogoIcon } from '@radix-ui/react-icons';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="sticky inset-0">
        <div className="content-area flex h-16 items-center">
          <h1 className="text-lg font-semibold">Generate Style From Code</h1>
        </div>
      </header>
      <main className="content-area">{children}</main>
      <footer className="bg-figma-bg-secondary border-figma-border border-t">
        <div className="content-area flex h-16 items-center justify-end">
          <a
            href="https://github.com/sangrimlee/figma-plugins"
            target="_blank"
            className="text-figma-text-secondary hover:text-figma-text-secondary-hover flex items-center font-medium transition-colors"
            rel="noreferrer"
          >
            <GitHubLogoIcon className="mr-1.5 h-5 w-5" />
            <span>Github</span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
