import * as React from "react";

import { rhythm } from "../utils/typography";
import { Link } from "gatsby";

type LayoutProps = { children?: React.ReactNode } & { pageTitle?: string };

const MainLayout: React.FC = ({ children, pageTitle }: LayoutProps  ) => (
  <div
    style={{
      margin: `0 auto`,
      marginBottom: rhythm(1.5),
      marginTop: rhythm(1.5),
      maxWidth: 650,
      paddingLeft: rhythm(3 / 4),
      paddingRight: rhythm(3 / 4),
    }}
  >
    <title>{pageTitle || 'sintinta.com'}</title>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <main>
      <h1> {pageTitle || 'sintinta.com'}</h1>
      {children}
    </main>
  </div>
);


export default MainLayout;
