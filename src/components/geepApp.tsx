import * as React from "react";

const GeepAppCmp: React.FC = ({ children }) => {
  const subTitle =
    "mt-8 text-xl leading-8 tracking-tight text-blue-400 mb-12 text-gray-900 sm:text-3xl";
  return (
    <div className="bg-white md-round ml-8 mt-28">
      <div className="m-5 leading-tight">
        <div className="">
          <div className="text-4xl leading-8 font-ex bold tracking-tight  dark:text-white sm:text-4xl my-5">
            GeekApp* for a{" "}
            <span className="text-gray-400">{"{selfDescription}"}</span> reader.
          </div>
          <div className={subTitle}>A place to enjoy paper books.</div>

          <p className="mt-2 max-w-2xl text-xl text-gray-400">
            “The book is like the spoon, scissors, the hammer, the wheel. Once
            invented, it cannot be improved. You cannot make a spoon that is
            better than a spoon.”{" "}
            <span className="text-indigo-500">Umberto Eco</span>.
          </p>

          <div className="text-gray-400 my-6 sm:text-base">
            * Development** in progress, stealing free time for a personal
            project without a clear objective except to avoid becoming a
            millionaire.{" "}
            <span className="text-red-400 italic">Just for fun!</span>
          </div>
          <div className="text-gray-400 sm:text-base">
            ** No Graphic Designers were harmed in the making of this web,
            app... thing.
          </div>
        </div>
      </div>
    </div>
  );
};
export default GeepAppCmp;
