import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const OtherTechCmp: React.FC = ({ children }) => {
  const paragraphStyle =
    "ml-16 mb-8 text-lg leading-6 font-medium text-gray-900";

  const paragraphIconStyle =
    "absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white";
  return (
    <div className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className={paragraphIconStyle}>
                  {/* <!-- Heroicon name: outline/annotation --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <p className={paragraphStyle}>Machine Learning</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                <ul className="list-none list-inside space-y-4 sm:text-xl">
                  <li>
                    <img
                      className="inline-block"
                      src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-ar21.svg"
                      alt="TensorFlow"
                    />
                  </li>
                  <li>
                    <div className="mt-8">
                      <StaticImage
                        src="../images/ml.png"
                        height={28}
                        alt="Google ML Kit "
                      />
                      <div className="inline-block ml-2 mt-1">
                        Google ML Kit{" "}
                      </div>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className={paragraphIconStyle}>
                  {/* <!-- Heroicon name: outline/annotation --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <p className={paragraphStyle}>Langs</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                <ul className="list-none list-inside space-y-4 sm:text-xl">
                  <li>
                    <img
                      className="inline-block"
                      src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg"
                      alt="Typescript"
                    />
                  </li>
                  <li>
                    <img
                      className="inline-block"
                      src="https://www.vectorlogo.zone/logos/dartlang/dartlang-ar21.svg"
                      alt="Dart"
                    />
                  </li>
                </ul>
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className={paragraphIconStyle}>
                  {/* <!-- Heroicon name: outline/annotation --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p className={paragraphStyle}>Libraries</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                <ul className="list-none list-inside space-y-4 sm:text-xl">
                  <li>
                    <StaticImage
                      src="../images/rxjs-1.svg"
                      width={36}
                      alt="A dinosaur"
                    />
                    <div className="inline-block text-red-800 ml-2 mt-1">
                      RxJs
                    </div>
                  </li>

                  <li>
                    <div className="mt-6">
                      <StaticImage
                        src="../images/ngrx.svg"
                        width={36}
                        alt="NgRx"
                      />
                      <div className="inline-block ml-2 mt-1">NgRx</div>
                    </div>
                  </li>

                  <li>
                    <img
                      className="inline-block"
                      src="https://www.vectorlogo.zone/logos/socketio/socketio-ar21.svg"
                      alt="Socketio"
                    />
                  </li>
                </ul>
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className={paragraphIconStyle}>
                  {/* <!-- Heroicon name: outline/annotation --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <p className={paragraphStyle}>Testing</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                <ul className="list-none list-inside space-y-4 sm:text-xl">
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
                </ul>
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className={paragraphIconStyle}>
                  {/* <!-- Heroicon name: outline/annotation --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <p className={paragraphStyle}>Design</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                <ul className="list-none list-inside space-y-4 sm:text-xl">
                  <li>
                    <img
                      className="inline-block"
                      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg"
                      alt="TailwindCss"
                    />
                  </li>
                </ul>
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className={paragraphIconStyle}>
                  {/* <!-- Heroicon name: outline/annotation --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <p className={paragraphStyle}>API</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                <ul className="list-none list-inside space-y-4 sm:text-xl">
                  <li>
                    <img
                      className="inline-block"
                      src="https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg"
                      alt="Graphql"
                    />
                  </li>
                </ul>
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className={paragraphIconStyle}>
                  {/* <!-- Heroicon name: outline/annotation --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
                <p className={paragraphStyle}>Build System</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                <ul className="list-none list-inside space-y-4 sm:text-xl">
                  <li>
                    <div className="mt-8">
                      <StaticImage src="../images/nx.svg" width={28} alt="Nx" />
                      <div className="inline-block ml-2">Nx</div>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
export default OtherTechCmp;
