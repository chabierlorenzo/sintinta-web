import * as React from "react";
import { Link } from "gatsby";

type LayoutProps = { children?: React.ReactNode } & { pageTitle?: string };

const MainLayout: React.FC = ({ children, pageTitle }: LayoutProps) => (
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <title>{pageTitle || "sintinta.com"}</title>

    <nav className="flex items-center justify-between flex-wrap bg-teal-500 pl-8 pt-5">
      <ul className="flex">
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
    <div className="md:flex">
      <div className="pt-6 pl-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          <h1> {pageTitle || "sintinta.com"}</h1>
        </div>
        <p className="block pt-5 mt-1 text-lg leading-tight font-medium text-gray-800 hover:underline">
          {children}
        </p>
        <p className="mt-2 pt-5 pb-4 text-gray-500">
          Made with 💖 for paper book readers
        </p>
      </div>
    </div>
  </div>
);

export default MainLayout;
