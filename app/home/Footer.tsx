export default function Footer() {
  return (
    <>
      <footer className="relative bg-black text-white  pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold ">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 ">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              {/* svg icons */}
              <div className="mt-6 flex flex-row gap-4 lg:mb-0 mb-6">
                {/* facebook svg */}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    fill="url(#paint0_linear_1009_58)"
                  />
                  <path
                    d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1009_58"
                      x1="16"
                      y1="2"
                      x2="16"
                      y2="29.917"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18ACFE" />
                      <stop offset="1" stopColor="#0163E0" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* linkedin svg */}
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="14"
                    fill="#1275B1"
                  />
                  <path
                    d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z"
                    fill="white"
                  />
                  <path
                    d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z"
                    fill="white"
                  />
                  <path
                    d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <ul className=" cursor-pointer">
                    <li>
                      <p className="font-semibold block pb-2 text-sm">
                        About Us
                      </p>
                    </li>
                    <li>
                      <p className=" cursor-pointer font-semibold block pb-2 text-sm">
                        Blog
                      </p>
                    </li>
                    <li>
                      <p className=" font-semibold block pb-2 text-sm">
                        Github
                      </p>
                    </li>
                    <li>
                      <p className=" font-semibold block pb-2 text-sm">
                        Free Products
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <ul className=" cursor-pointer">
                    <li>
                      <p className=" font-semibold block pb-2 text-sm">
                        License
                      </p>
                    </li>
                    <li>
                      <p className=" font-semibold block pb-2 text-sm">
                        Terms &amp; Conditions
                      </p>
                    </li>
                    <li>
                      <p className=" font-semibold block pb-2 text-sm">
                        Privacy Policy
                      </p>
                    </li>
                    <li>
                      <p className=" font-semibold block pb-2 text-sm">
                        Contact Us
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm  font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>
                <p className=" hover:text-gray-800">SWEDWEB LTD.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
