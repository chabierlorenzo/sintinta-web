import * as React from "react";
import Layout from "../components/layout";
import { graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Tech from "../components/tech";

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
        <div className="bg-white md-round ml-8 mt-3">
          <div className="text-4xl leading-8 font-ex  bo ld tracking-tight text-purple-500 dark:text-white sm:text-4xl my-5">
            Geek App for a (
            <span className="text-gray-500">self description</span>) reader.
          </div>
          <div className="space-x-1 mt-2 sm:text-2xl">
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
            Slow development in free time, with no pressure and,
            <span className="text-gray-500 italic">usually</span>, no coffee.
          </div>
          <div className="m-5 leading-tight">
            <div className="text-purple-500 my-6 sm:text-2xl">
              Just for fun (and love of drama):
            </div>
            <ul className="list-disc list-inside space-y-4 sm:text-xl">
              <li className="space-y-2.5">
                Play with <span className="text-gray-500 italic">cursed</span>{" "}
                technologies.
              </li>
              <li>Improve the reader experience.</li>
              <li>Ignoring warnings that I'm wasting my time.</li>
              <li>Even, ignoring iphone for the time being (sic).</li>
            </ul>
          </div>
          <div className="text-gray-400 my-9 sm:text-base">
            * No Graphic Designers Were Harmed in the Making of This Web
          </div>
        </div>

        <div className=" ml-8 mt-3">
          <div className="text-4xl leading-8 font-ex  bo ld tracking-tight text-blue-500 dark:text-white sm:text-4xl my-5">
            Technologies
          </div>

          {/* <ul className="list-none list-inside space-y-4 sm:text-xl">
            <li>
              <img
                className="inline-block"
                src="https://www.vectorlogo.zone/logos/nestjs/nestjs-ar21.svg"
                alt="Nestjs"
              />
            </li>
            <li>
              <img
                className="inline-block"
                src="https://www.vectorlogo.zone/logos/angular/angular-ar21.svg"
                alt="Angular"
              />
            </li>
            <li>
              <img
                className="inline-block"
                src="https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg"
                alt="Flutter"
              />
            </li>
            <li>
              <img
                className="inline-block"
                src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-ar21.svg"
                alt="TensorFlow"
              />
            </li>
            <li>
              <img
                className="inline-block"
                src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg"
                alt="Typescript"
              />
            </li>
            <li>
              <StaticImage
                src="../images/rxjs-1.svg"
                width={36}
                alt="A dinosaur"
              />
              <div className="inline-block text-red-800 ml-2 mt-1">RxJs</div>
            </li>
            <li>
              <img
                className="inline-block"
                src="https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg"
                alt="Graphql"
              />
            </li>
            <li>
              <img
                className="inline-block"
                src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-ar21.svg"
                alt="GatsbyJS"
              />
            </li>
            <li>
              <img
                className="inline-block"
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg"
                alt="TailwindCss"
              />
            </li>
            <li>
              <img
                className="inline-block"
                src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-ar21.svg"
                alt="Jest"
              />
            </li>
            <li>
              <div className="mt-6">
                <StaticImage
                  src="../images/cypress.svg"
                  width={36}
                  alt="Cypress"
                />
                <div className="inline-block ml-2 mt-1">Cypress</div>
              </div>
            </li>
            <li>
              <div className="mt-8">
                <StaticImage
                  src="../images/ml.png"
                  height={28}
                  alt="Google ML Kit "
                />
                <div className="inline-block ml-2 mt-1">Google ML Kit </div>
              </div>
            </li>
            <li>
              <div className="mt-8">
                <StaticImage
                  src="../images/nx.svg"
                  width={28}
                  alt="Google ML Kit "
                />
                <div className="inline-block ml-2">Nx</div>
              </div>
            </li>
          </ul> */}

          <Tech></Tech>
        </div>
      </Layout>
    );
  }
}
