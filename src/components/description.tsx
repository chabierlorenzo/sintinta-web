import * as React from "react";

const DescriptionCmp: React.FC = ({ children }) => (
  <section>
    <div className="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800">
      <div className="flex flex-wrap -mx-8">
        <div className="w-full lg:w-1/2 px-8">
          <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
            <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white">
              Slow reading
            </h2>
            <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
              Slow reading is the intentional reduction in the speed of reading,
              carried out to increase comprehension or pleasure. The concept
              appears to have originated in the study of philosophy and
              literature as a technique to more fully comprehend and appreciate
              a complex text
            </p>
            <div className="w-full md:w-1/3">
              <button
                type="button"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                See more
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-8">
          <ul className="space-y-12">
            <li className="flex -mx-4">
              <div className="px-4">
                <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                  1
                </span>
              </div>
              <div className="px-4">
                <h3 className="my-4 text-xl font-semibold dark:text-white">
                  Adjust the speed to the reading
                </h3>
                <p className="text-gray-500 dark:text-gray-300 leading-loose">
                  It is not mandatory to read slowly, because the aim is to
                  immerse yourself in the world that is condensed in the pages
                  you hold in your hands.
                </p>
              </div>
            </li>
            <li className="flex -mx-4">
              <div className="px-4">
                <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                  2
                </span>
              </div>
              <div className="px-4">
                <h3 className="my-4 text-xl font-semibold dark:text-white">
                  Take notes whenever you can.
                </h3>
                <p className="text-gray-500 dark:text-gray-300 leading-loose">
                  While you are reading and when you have finished reading.
                  Ideas that come up, concepts that you don't know or that you
                  can relate to others. Summarizing what you have read can be
                  useful both to settle down and to pick up where you left off
                  the next time you open the book.
                </p>
              </div>
            </li>
            <li className="flex -mx-4">
              <div className="px-4">
                <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                  3
                </span>
              </div>
              <div className="px-4">
                <h3 className="my-4 text-xl font-semibold dark:text-white">
                  Build your knowledge
                </h3>
                <p className="text-gray-500 dark:text-gray-300 leading-loose">
                  Share your emotions and knowledge with other readers to enrich
                  all the content and knowledge you have been creating. Find the
                  relationships. Build your reading.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default DescriptionCmp;
