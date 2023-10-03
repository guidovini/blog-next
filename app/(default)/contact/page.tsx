import Logo from "@/components/ui/logo";

export const metadata = {
  title: "Guido Santillan | Contact",
  description: "Page description",
};

export default function Contact() {
  return (
    <>
      <header className="fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-8">Let's build something extraordinary</h1>
              <p className="text-xl text-gray-600 mb-8">
                My passion for creating seamless user experiences, coupled with
                strong problem-solving skills and a commitment to excellence,
                ensures innovative and effective web solutions.
              </p>

              <p>Logos go here</p>

              <div className="w-1/3 px-3 mx-auto">
                <a
                  href="mailto:info@guidosantillan.com"
                  className="btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center"
                >
                  <span className="flex-auto pl-8 pr-8 ">Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
