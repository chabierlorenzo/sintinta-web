import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const TechCmp: React.FC = ({ children }) => {
  const paragraphStyle =
    "ml-16 mb-8 text-lg leading-6 font-medium text-gray-900";

  const paragraphIconStyle =
    "absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-600 text-white";
  return (
    <div className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className={paragraphIconStyle}>
                  {/* <!-- Heroicon name: outline/globe-alt --> */}
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
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
                <p className={paragraphStyle}>Backend</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                <ul className="list-none list-inside space-y-4 sm:text-xl">
                  <li>
                    <img
                      className="inline-block"
                      src="https://www.vectorlogo.zone/logos/nestjs/nestjs-ar21.svg"
                      alt="Nestjs"
                    />
                  </li>
                </ul>
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className={paragraphIconStyle}>
                  {/* <!-- Heroicon name: outline/scale --> */}
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
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <p className={paragraphStyle}>Frontend</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                <ul className="list-none list-inside space-y-4 sm:text-xl">
                  <li>
                    <img
                      className="inline-block"
                      src="https://www.vectorlogo.zone/logos/angular/angular-ar21.svg"
                      alt="Angular"
                    />
                  </li>
                </ul>
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className={paragraphIconStyle}>
                  {/* <!-- Heroicon name: outline/lightning-bolt --> */}
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
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className={paragraphStyle}>Mobile</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                <ul className="list-none list-inside space-y-4 sm:text-xl">
                  <li>
                    <img
                      className="inline-block"
                      src="https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg"
                      alt="Flutter"
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
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className={paragraphStyle}>Web</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                <ul className="list-none list-inside space-y-4 sm:text-xl">
                  <li>
                    <img
                      className="inline-block"
                      src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-ar21.svg"
                      alt="GatsbyJS"
                    />
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
export default TechCmp;
