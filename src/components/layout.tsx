import * as React from "react";
import { Link } from "gatsby";
import backgroundImage from "../images/background-book.jpg";

type LayoutProps = { children?: React.ReactNode } & { pageTitle?: string };

const MainLayout: React.FC = ({ children, pageTitle }: LayoutProps) => (
  <div
    className="mx-auto overflow-hidden p-2 h-screen bg-cover bg-center flex flex-col"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <title>{pageTitle || "sintinta.com"}</title>
    <header className="py-5 bg-white bg-opacity-50 text-white text-center">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 pl-8 pt-3 ">
        <ul className="flex">
          <li className="mr-6">
            <Link className="text-blue-600 hover:text-gray-600 hover:underline" to="/">
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-blue-600 hover:text-gray-600 hover:underline" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className="flex-1 bg-white bg-opacity-50 overflow-y-auto p-5">
      <div className="pt-6 pl-8">
        <div className="uppercase tracking-wide text-sm text-gray-700 font-semibold">
          <h1> {pageTitle || "sintinta.com"}</h1>
        </div>
        <p className="block pt-5 mt-1 text-lg leading-tight font-medium text-gray-700 hover:underline">
          {children}
        </p>
      </div>
    </div>
    <div className="pb-2 bg-white bg-opacity-50 text-white text-center">
      <p className="mt-2 pt-5 pb-4 text-purple-900">
        Made with 💖 for paper book readers
      </p>
    </div>
  </div>
);

export default MainLayout;
