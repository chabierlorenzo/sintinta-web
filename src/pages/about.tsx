import * as React from "react";
import Layout from "../components/layout";
import { graphql, PageProps } from "gatsby";
import Tech from "../components/tech";
import OtherTech from "../components/otherTech";

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
  query IndexQuery2 {
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

export default class AboutPage extends React.Component<IndexPageProps> {
  public render() {
    const { siteName, menuLinks } = this.props.data.site.siteMetadata;

    const props: any = {
      pageTitle: "About us?",
      menuLinks: menuLinks,
    };

    return (
      <Layout {...props}>
        <div className="bg-white md-round ml-8 mt-28">
          <div className="m-5 leading-tight">
            <div className="text-4xl leading-8 font-ex bold tracking-tight  dark:text-white sm:text-4xl my-5">
              Why spend time and effort on projects that{" "}
              <span className="text-gray-400">won't</span> make you a
              millionaire?
            </div>
            <div className="mt-8 text-xl text-sky-600 leading-8 tracking-tight mb-12 text-gray-900 sm:text-3xl">
              There are several causes, absurd and regrettable, but the main
              irrational one is love:
            </div>
            <ul className="list-none list-inside space-y-4 sm:text-xl">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>{" "}
                I love paper books.
              </li>

              <li className="space-y-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>{" "}
                I love playing with technologies as an {"{myAge}"}-year-old
                child.
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>{" "}
                I love ignoring warnings from other human beings that I am a
                perfect dunce.
              </li>

              {/* <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>{" "}
                Ignoring iphone for the time being (sic).
              </li> */}
            </ul>
          </div>
        </div>

        <div className=" ml-8 mt-3">
          <div className="text-4xl leading-8 font-ex  bo ld tracking-tight text-blue-500 dark:text-white sm:text-4xl my-5">
            Technologies
          </div>

          <Tech></Tech>
        </div>

        <div className=" ml-8 mt-3">
          <div className="text-4xl leading-8 font-ex  bo ld tracking-tight text-blue-500 dark:text-white sm:text-4xl my-5">
            Other
          </div>

          <OtherTech></OtherTech>
        </div>
      </Layout>
    );
  }
}
