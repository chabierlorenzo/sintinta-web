import * as React from "react";

const GeepAppCmp: React.FC = ({ children }) => (
  <div className="py-2 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <div className="text-4xl leading-8 font-ex  bo ld tracking-tight text-blue-500 dark:text-white sm:text-4xl my-5">
          Geek App* for a (
          <span className="text-gray-400">self description</span>) reader.
        </div>
        <div className="mt-12 text-xl leading-8 tracking-tight mb-14 text-gray-900 sm:text-3xl">
          A place to enjoy paper books.
        </div>

        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          “The book is like the spoon, scissors, the hammer, the wheel. Once
          invented, it cannot be improved. You cannot make a spoon that is
          better than a spoon.” <span className="text-black">Umberto Eco</span>.
        </p>

        <div className="text-gray-400 my-9 sm:text-base">
          * Development** in progress, stealing free time for a personal project
          without a clear objective except to avoid becoming a millionaire.{" "}
          <span className="text-red-400 italic">Just for fun!</span>
        </div>
        <div className="text-gray-400 my-9 sm:text-base">
          ** No Graphic Designers were harmed in the making of this web, app...
          thing.
        </div>
      </div>
    </div>
  </div>
);
export default GeepAppCmp;
