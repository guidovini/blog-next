"use client";

export default function FeaturesHome() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none"
        aria-hidden="true"
        id="about-me"
      ></div>
      <div className="absolute left-0 right-0 w-px h-20 p-px m-auto transform -translate-y-1/2 bg-gray-200"></div>

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-left md:pb-24">
            <h1 className="mb-4 h2">About Me</h1>
            <p className="mb-8 text-xl text-gray-600">
              I am a skilled and highly adaptable software developer with over{" "}
              <strong>5+ YOE</strong> in Germany's tech scene, specializing in{" "}
              <strong>frontend</strong> development. Proficient in building
              robust and scalable web applications with modern technologies.
            </p>

            <p className="mb-8 text-xl text-gray-600">
              Actively seeking opportunities to expand my expertise in the tech
              industry in order to help develop world-changing solutions.
            </p>

            {/* <p className="mb-8 text-xl text-gray-600">
              As a tech enthusiast, I am passionate about technology and its use
              to improve and ease human life quality. I use a multi-disciplined
              approach to solve problems. A fast learner who adapts quickly to
              assess an organization’s needs.
            </p>

            <p className="mb-8 text-xl text-gray-600">
              I am actively looking forward to expanding my knowledge, improving
              my skills, and obtaining relevant experience in the tech industry
              in order to help develop world-changing solutions.
            </p> */}

            <p className="text-2xl text-center text-gray-600">
              i ❤️ [🏁🏎️][🎮][🍿🎬][🎧][📖]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
