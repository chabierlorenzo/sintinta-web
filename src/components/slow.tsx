import * as React from "react";

const SlowCmp: React.FC = ({ children }) => {
  const subTitle =
    "mt-8 text-xl leading-8 tracking-tight text-sky-600 mb-12 sm:text-3xl";
  return (
    <div className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mt-8 mb-4">
          <h2 className={subTitle}>Be paper, my friend...</h2>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-600 text-white">
                  {/* <!-- Heroicon name: outline/annotation --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Slow Reading.
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Reading is a pleasure that can be enjoyed without rushing. Read
                at a speed that allows you to delve into the text and get the
                most out of it. Slow reading is not a defect, but a habit that
                you can enjoy whenever you want.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-600 text-white">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Build your reading club.
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Make your lists, schedule your readings by theme; read a canon,
                an author, a collection or create your own relationships.
                Organize meetings, share by chat, encourage the exchange of
                knowledge and the enrichment of the group.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-600 text-white">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Logbook.
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Remember all important events related to a book or reading.
                Retrieve the ideas you have been generating through deep reading
                of the book.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-600 text-white">
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
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Your smart bookmark.
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                You can note the page on which you have finished reading. You
                can also rate and comment on each reading so that each one is a
                thermometer that measures the pleasure you receive, and a simple
                way to evaluate the reading. In the end you will have easily
                created content that you can turn into something valuable.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-600 text-white">
                  {/* <!-- Heroicon name: outline/lightning-bolt --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Take all the notes.
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Take as many notes as you need and organize them in a way that
                will show you new connections. You can link your notes or ask
                the app to provide you with links to notes from other readers.
                See how your understanding improves if you do rereads.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-600 text-white">
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
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Share and let others share with you.
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                You can publish the information you want. Your progress, what
                you like, the books you finish or abandon. Also, make your
                lists, schedule your readings by theme; read a canon, an author,
                a collection or create your own relationships.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-600 text-white">
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
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Build your library
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Organize your books by themes, tag them, sort them by type or by
                the books you appreciate the most. Make your library a living
                being and enjoy its company.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
export default SlowCmp;
