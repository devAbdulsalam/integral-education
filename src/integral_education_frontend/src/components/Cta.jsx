import { Link } from "react-router-dom"

const Cta = () => {
    return (
        <section className="bg-white py-20 p-5 lg:py-[120px] dark:bg-dark">
        <div className="container mx-auto md:w-10/12">
          <div
            className="relative z-10 overflow-hidden rounded bg-primary px-8 py-12 md:p-[70px]"
          >
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <span className="mb-4 block text-2xl font-medium text-white">
                Ready to Test Your Knowledge?
                </span>

                <p className="text-white test-lg">Whether you're a student, a professional, or just someone passionate about making a difference, I-Force offers a fun and rewarding way to deepen your understanding of corruption and become a champion of integrity.</p>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex flex-wrap lg:justify-end">
                  <Link
                    to="../index"
                    className="hover:bg-shadow-1 my-1 mr-4 inline-flex rounded-md bg-white px-7 py-3 text-base font-medium text-primary transition"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
  
            <div>
              <span className="absolute left-0 top-0 z-[-1]">
                <svg
                  width="189"
                  height="162"
                  viewBox="0 0 189 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="16"
                    cy="-16.5"
                    rx="173"
                    ry="178.5"
                    transform="rotate(180 16 -16.5)"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-157"
                      y1="-107.754"
                      x2="98.5011"
                      y2="-106.425"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.07" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width="191"
                  height="208"
                  viewBox="0 0 191 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="173"
                    cy="178.5"
                    rx="173"
                    ry="178.5"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-3.27832e-05"
                      y1="87.2457"
                      x2="255.501"
                      y2="88.5747"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.07" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Cta