import Image from "next/image";

import Logo from "@/components/ui/logo";

import githubLogo from "@/public/images/github.png";
import linkedinLogo from "@/public/images/linkedin.png";
import envelopeLogo from "@/public/images/envelope.png";

export const metadata = {
  title: "Guido Santillan | Contact",
  description: "Page description",
};

export default function Contact() {
  return (
    <>
      <header className="fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90">
        <div className="max-w-6xl px-5 mx-auto sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="mr-4 shrink-0">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="max-w-6xl px-4 mx-auto sm:px-6">
          <div className="pt-32 pb-10 md:pt-40 md:pb-12">
            {/* Section header */}
            <div className="max-w-3xl pb-10 mx-auto text-center md:pb-12">
              <h1 className="mb-8 h1">Let's build something extraordinary</h1>
              {/* <p className="mb-8 text-xl text-gray-600">
                My passion for creating seamless user experiences, coupled with
                strong problem-solving skills and a commitment to excellence,
                ensures innovative and effective web solutions.
              </p> */}

              <div className="flex content-center justify-center">
                <a
                  href="https://github.com/guidovini"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={githubLogo}
                    width={175}
                    height={175}
                    className="p-8 opacity-40 hover:opacity-70"
                    alt="github logo"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/guidovini/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={linkedinLogo}
                    width={175}
                    height={175}
                    className="p-8 opacity-40 hover:opacity-70"
                    alt="linkedin logo"
                  />
                </a>

                <a href="mailto:info@guidosantillan.com">
                  <Image
                    src={envelopeLogo}
                    width={200}
                    height={200}
                    className="p-8 red-600 opacity-40 hover:opacity-70 "
                    alt="mail logo"
                  />
                </a>
              </div>

              {/* <div className="w-1/3 px-3 mx-auto">
                <a
                  href="mailto:info@guidosantillan.com"
                  className="relative flex items-center w-full px-0 text-white bg-gray-900 btn hover:bg-gray-800"
                >
                  <span className="flex-auto pl-8 pr-8 ">Contact</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
