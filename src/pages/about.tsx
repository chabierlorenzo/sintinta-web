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
        <div className="text-4xl">Tecnologías</div>
        <div>NestJS</div>
        <div>Angular</div>
        <div>Typescript</div>
        <div>RxJS</div>
        <div>GraphQL</div>
        <div>Gatsby</div>
        <div>Tailwindcsss</div>
      </Layout>
    );
  }
}
