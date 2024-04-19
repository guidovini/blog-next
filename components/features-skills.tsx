"use client";

export default function FeaturesHome() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 mb-16 bg-white pointer-events-none"
        aria-hidden="true"
        id="about-me"
      ></div>
      <div className="absolute left-0 right-0 w-px h-20 p-px m-auto transform -translate-y-1/2 bg-gray-200"></div>

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-12 md:pt-24">
          {/* My skills */}
          <div className="max-w-3xl pb-12 mx-auto text-right md:pb-16">
            <h1 className="mb-4 h2">My Tech Stack</h1>
            <p className="mb-8 text-2xl text-gray-600">
              React.js, Typescript, GraphQL, Next.js
            </p>

            <span>Supporting the React ecosystem</span>
            <p className="mb-8 text-xl text-gray-600">
              styled-components, Storybook, React Router, Redux, TanStack Query,
              Apollo Client, AgGrid, i18n, OpenLayers, Formik, Relay, Bootstrap,
              Zustand, React Native
            </p>

            <span>Additional tools</span>
            <p className="mb-8 text-xl text-gray-600">
              Docker, Git, Testing Library, Playwright
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}