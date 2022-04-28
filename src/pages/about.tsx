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
  query IndexQuery2 {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

export default class AboutPage extends React.Component<IndexPageProps> {
  public render() {
    const props = {
      pageTitle: "About us?",
    };

    return (
      <Layout {...props}>
        <p className="text-gray-600">No graphic designer was harmed in te making of this website.</p>
      </Layout>
    );
  }
}
