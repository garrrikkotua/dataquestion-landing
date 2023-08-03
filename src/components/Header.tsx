import { useState } from "preact/hooks";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div class="overflow-x-hidden bg-gray-50">
      <header class="py-4 md:py-6">
        <div class="container px-4 mx-auto sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <div class="flex-shrink-0">
              <a
                href="/"
                title=""
                class="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img class="w-auto h-8" src="dataquestion.svg" alt="" />
              </a>
            </div>

            <div class="flex lg:hidden">
              <button
                type="button"
                class="text-gray-900"
                onClick={() => setExpanded(!expanded)}
              >
                <span aria-hidden="true" className={expanded ? "hidden" : ""}>
                  <svg
                    class="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </span>

                <span aria-hidden="true" className={expanded ? "" : "hidden"}>
                  <svg
                    class="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            <div class="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
              <a
                href="/#features"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Features{" "}
              </a>

              <a
                href="/#pricing"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Pricing{" "}
              </a>

              <a
                href="/#how-it-works"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                How it works{" "}
              </a>
            </div>

            <div class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <a
                href="https://app.dataquestion.io/auth/login"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Customer Login{" "}
              </a>

              <a
                href="https://app.dataquestion.io/auth/signup"
                title=""
                class="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-brand border border-transparent rounded-xl hover:bg-brand-light font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Sign up
              </a>
            </div>
          </div>

          <nav className={expanded ? "" : "hidden"}>
            <div class="px-1 py-8">
              <div class="grid gap-y-7">
                <a
                  href="/#features"
                  title=""
                  class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href="/#pricing"
                  title=""
                  class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Pricing{" "}
                </a>

                <a
                  href="/#how-it-works"
                  title=""
                  class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  How it works{" "}
                </a>

                <a
                  href="https://app.dataquestion.com"
                  title=""
                  class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Customer Login{" "}
                </a>

                <a
                  href="https://app.dataquestion.com"
                  title=""
                  class="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-brand border border-transparent rounded-xl hover:bg-brand-light font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Sign up
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
