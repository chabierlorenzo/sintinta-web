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
        menuLinks: [
          {
            name: string;
            link: string;
          }
        ];
      };
    };
  };
}

export const pageQuery: any = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
        menuLinks {
          name
          link
        }
      }
    }
  }
`;

type PropProp = {
  pageTitle: string;
  siteName: string;
  children?: any;
};

export default class IndexPage extends React.Component<IndexPageProps> {
  public render() {
    const { siteName, menuLinks } = this.props.data.site.siteMetadata;

    const props: any = {
      pageTitle: siteName,
      siteName: siteName,
      menuLinks: menuLinks,
    };

    return (
      <Layout {...props}>
        <Slow></Slow>

        <DescriptionCmp></DescriptionCmp>

        {/* <Features></Features> */}
      </Layout>
    );
  }
}
