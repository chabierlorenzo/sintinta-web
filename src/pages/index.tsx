import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Features from "../components/features";
import DescriptionCmp from "../components/description";
import Slow from "../components/slow";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
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
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps> {
  readonly pageTitle = "Be paper, my friend..";

  public render() {
    const { siteName } = this.props.data.site.siteMetadata;

    const props = {
      pageTitle: this.pageTitle,
      siteName: siteName,
    };

    return (
      <Layout {...props}>
        <div className="bg-white md-round ml-8 mt-3">
          <p className="text-4xl leading-8 font-ex  bo ld tracking-tight text-purple-500 dark:text-white sm:text-4xl my-5">
            Geek App for a (
            <span className="text-gray-500">self description</span>) reader.
          </p>
          <p className="space-x-1 mt-2 sm:text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>{" "}
            Developed in spare time with no pressure, and
            <span className="text-gray-500 italic">almost</span> no coffee.
          </p>
          <p className="m-5 leading-tight">
            <div className="text-purple-500 font-bold my-6 sm:text-3xl">
              Just for fun:
            </div>
            <ul className="list-disc list-inside space-y-4 sm:text-xl">
              <li className="space-y-2.5">Play with technologies</li>
              <li>Improve <span className="text-gray-500 italic">the</span> reader experience</li>
            </ul>
          </p>
          <div className="text-gray-400 my-9 sm:text-base">
            * No Graphic Designers Were Harmed in the Making of This Web
          </div>
        </div>

        <Slow></Slow>

        <DescriptionCmp></DescriptionCmp>

        <Features></Features>
      </Layout>
    );
  }
}
