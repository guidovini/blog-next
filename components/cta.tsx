export default function Cta() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="px-8 py-10 bg-blue-600 rounded shadow-2xl md:py-16 md:px-12"
            data-aos="zoom-y-out"
          >
            <div className="flex flex-col items-center justify-between lg:flex-row">
              {/* CTA content */}
              <div className="mb-6 text-center lg:mr-16 lg:mb-0 lg:text-left">
                <h3 className="mb-4 text-white h3">Wanna talk?</h3>
                <p className="text-lg text-white opacity-75">
                  Contact me directly. Send your email to{" "}
                  <span className="font-bold">info</span> at{" "}
                  <span className="font-bold">guidosantillan.com</span>
                </p>
              </div>

              {/* CTA button */}
              <div>
                <a
                  className="text-blue-600 btn bg-gradient-to-r from-blue-100 to-white"
                  href="/contact"
                >
                  Say hi :)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
