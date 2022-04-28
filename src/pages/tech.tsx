import * as React from "react";
import Layout from "../components/layout";
import { graphql, Link, PageProps } from "gatsby";

interface IndexPageProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
  };
}

export const pageQuery = graphql`
  query IndexQueryHow {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

export default class HowPage extends React.Component<IndexPageProps> {
  public render() {
    const props = {
      pageTitle: "Develop in process.",
    };

    return (
      <Layout {...props}>
        <div className="divide-y divide-gray-500 w-[300px]">
          <div className="mb-4">
            <p className="text-slate-800 font-normal">API</p>
            <ul className="mb-1 text-base ml-2 font-normal text-zinc-700">
              <li>NodeJS</li>
              <li>NestJS</li>
              <li>Rest/GraphQL</li>
            </ul>
          </div>
          <div className="my-4">
            <p className="text-slate-800 mt-4 font-normal">Web App</p>
            <ul className="mb-1 text-base ml-2 font-normal text-zinc-700">
              <li>Angular</li>
              <li>NgRx</li>
              <li>RxJS</li>
            </ul>
          </div>
          <div className="my-4">
            <p className="text-slate-800 mt-4 font-normal">Mobile App</p>
            <ul className="mb-1 text-base ml-2 font-normal text-zinc-700">
              <li>Flutter</li>
            </ul>
          </div>
          <div className="my-4">
            <p className="text-slate-800 mt-4 font-normal">Web</p>
            <ul className="mb-1 text-base ml-2 font-normal text-zinc-700">
              <li>Gatsby</li>
              <li>Tailwindcss</li>
            </ul>
          </div>
          <div className="my-4">
            <p className="text-slate-800 mt-4 font-normal">Experimental</p>
            <ul className="mb-1 text-base ml-2 font-normal text-zinc-700">
              <li>Tensorflow</li>
            </ul>
          </div>
          <div className="my-4">
            <p className="text-slate-800 mt-4 font-normal">Casualties</p>
            <ul className="mb-1 text-base ml-2 font-normal text-zinc-700">
              <li>
                No graphic designer was harmed in the making of this development.
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}
