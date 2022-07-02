import * as React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Header from "./header.tsx";

type LayoutProps = { children?: React.ReactNode } & { pageTitle?: string } & {
  menuLinks?: any;
};

const MainLayout: React.FC = ({
  children,
  pageTitle,
  menuLinks,
}: LayoutProps) => {
  let [profile, setProfile] = useState(0);
  // let [page, setPage] = useState(0);

  const toggleShowProfile = () => {
    if (profile === 1) {
      setProfile(0);
    } else {
      setProfile(1);
    }
  };

  return (
    <div>
      <Helmet
        title={pageTitle}
        defer={false}
        meta={[
          { name: "description", content: "App for paper readers" },
          { name: "keywords", content: "books, read" },
        ]}
      >
        {" "}
      </Helmet>

      <Header menuLinks={menuLinks} siteTitle={pageTitle} />

      {/* <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
    </header> */}
      <main className="flex">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 h-full flex-1 divide-y-2 space-y-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
