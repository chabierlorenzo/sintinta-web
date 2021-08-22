import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

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
  readonly pageTitle = "Be book, my friend...";

  public render() {
    const { siteName } = this.props.data.site.siteMetadata;

    const props = {
      pageTitle: this.pageTitle,
      siteName: siteName,
    };

    return (
      <Layout {...props}>
        <p>Geek App for a (self description) reader.</p>
      </Layout>
    );
  }
}
