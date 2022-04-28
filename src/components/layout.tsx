import * as React from "react";
import { Link } from "gatsby";
import backgroundImage from "../images/background-book.jpg";

type LayoutProps = { children?: React.ReactNode } & { pageTitle?: string };

const MainLayout: React.FC = ({ children, pageTitle }: LayoutProps) => (
  <div
    className="mx-auto overflow-hidden  h-screen bg-cover bg-center flex flex-col"
    style={{ backgroundImage: `url(${backgroundImage})`}}
  >
    <title>{pageTitle || "sintinta.com"}</title>
    <header className=" bg-white bg-opacity-50 text-white text-center">
      <nav className="flex items-center bg-blue-600 justify-end flex-wrap pr-8 py-4">
        <ul className="flex">
          <li className="mr-6">
            <Link
              className="text-gray-200 hover:text-blue-600 hover:underline"
              to="/"
            >
              First Page
            </Link>
          </li>
          <li className="mr-6">
            <Link
              className="text-gray-200 hover:text-blue-600 hover:underline"
              to="/tech"
            >
              Tech
            </Link>
          </li>
          {/* <li className="mr-6">
            <Link
              className="text-gray-200 hover:text-blue-600 hover:underline"
              to="/why"
            >
              Why?
            </Link>
          </li> */}
          <li className="mr-6">
            <Link
              className="text-gray-200 hover:text-blue-600 hover:underline"
              to="https://app.sintinta.com"
            >
              WebApp
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    <div className="flex-1 bg-white bg-opacity-50 overflow-y-auto pt-5">
      <div className="pl-8">
        <div className="text-xl tracking-wide text-sm text-black font-normal">
          <h1 className="underline underline-offset-1"> {pageTitle || "sintinta.com"}</h1>
        </div>
        <p className="block pt-4 mt-1 text-lg leading-tight font-medium text-gray-700">
          {children}
        </p>
      </div>
    </div>
    <div className="pb-2 bg-white bg-opacity-50 text-white text-center">
      <p className="mt-2 pt-5 pb-4 text-slate-800">Made with 💖 and ☕️</p>
    </div>
  </div>
);

export default MainLayout;
