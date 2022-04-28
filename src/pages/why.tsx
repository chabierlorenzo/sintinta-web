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
  query IndexQueryWhy {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

export default class DisclaimerPage extends React.Component<IndexPageProps> {
  public render() {
    const props = {
      pageTitle: "Just for read.",
    };

    return (
      <Layout {...props}>
        <p className="text-gray-600 mb-4">
          Developed in spare time, with no business interests and no pressure.
        </p>
      </Layout>
    );
  }
}
