// import Image from "next/image";

// export default function Footer() {
//   return (
//     <div className="w-full border-t border-t-gray-500">
//       <div className="w-[80%] pt-20 pb-50 flex justify-around border-b border-gray-500 justify-self-center">
//         <div className="w-[43%]">
//           <div className="logo w-full">
//             <Image
//               className=""
//               src="/footer_logo.png"
//               width={180}
//               height={150}
//               alt="course-card"
//               loading="eager"
//               fetchPriority="high"
//             />
//             <p className="text-[14px] text-slate-600">
//               Stay Up to date with our latest features and releases by joining
//               our newsletter.
//             </p>
//             <div className="flex items-center justify-between mt-10 w-[70%]">
//               <input
//                 className="w-[75%] py-1 px-2 rounded-xl border"
//                 type="email"
//                 placeholder="Enter Your Email"
//               />
//               <button className=" w-[20%] py-1 px-2 rounded-xl bg-[#D4FB20] text-black">
//                 Search
//               </button>
//             </div>
//             <p className="text-[14px] text-slate-600 mt-2">
//               By subscribing, you agree to our Privacy Policy and consent to
//               receive updates from our company.
//             </p>
//           </div>
//         </div>
//         <div className="right side flex justify-around items-center w-[55%] h-auto gap-y-3">
//           <div className="flex flex-col justify-around text-slate-600 text-[14px]">
//             <p className="mb-3">Featured Courses</p>
//             <p className="mb-3">Featured Catagories</p>
//             <p className="mb-3">IT</p>
//             <p className="mb-3">Business</p>
//             <p className="mb-3">Design</p>
//           </div>
//           <div className="flex flex-col justify-around text-slate-600 text-[14px]">
//             <p className="mb-3">Development</p>
//             <p className="mb-3">Marketing</p>
//             <p className="mb-3">Photography</p>
//             <p className="mb-3">Finance</p>
//             <p className="mb-3">Sport</p>
//           </div>
//           <div className="flex flex-col justify-around text-slate-600 text-[14px]">
//             <p className="mb-3">Become a Creator</p>
//             <p className="mb-3">Affiliate Program</p>
//             <p className="mb-3">Help</p>
//             <p className="mb-3">Contact</p>
//             <p className="mb-3">About</p>
//           </div>
//         </div>
//       </div>
//       <div className="w-[80%] flex justify-between items-center justify-self-center text-slate-500 text-[12px] mt-3">
//         <div className="right-reserved w-[65%]">@2023 ByteSpace. All rights reserved.</div>
//         <div className="flex justify-between items-center w-[30%]">
//           <p>Privacy Policy</p>
//           <p>Terms of Service</p>
//           <p>Cookie Settings</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 bg-white">
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div
        className="
          mx-auto
          flex
          w-[90%]
          max-w-[1400px]
          flex-col
          gap-12
          border-b
          border-gray-300
          py-12

          sm:py-14

          md:w-[88%]
          md:gap-14

          lg:w-[85%]
          lg:flex-row
          lg:justify-between
          lg:py-20
        "
      >
        {/* =================================================
            LEFT SIDE - LOGO + NEWSLETTER
        ================================================== */}
        <div
          className="
            w-full

            lg:w-[40%]
            xl:w-[38%]
          "
        >
          {/* Logo */}
          <div className="w-full">
            <Image
              src="/footer_logo.png"
              width={180}
              height={150}
              alt="ByteSpace logo"
              priority
              className="
                h-auto
                w-[140px]

                sm:w-[160px]

                md:w-[180px]
              "
            />

            {/* Description */}
            <p
              className="
                mt-4
                max-w-[500px]
                text-sm
                leading-6
                text-slate-600
              "
            >
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter */}
            <div
              className="
                mt-7
                flex
                w-full
                max-w-[500px]
                flex-col
                gap-3

                sm:flex-row
              "
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  px-4
                  py-2.5
                  text-sm
                  text-slate-700
                  outline-none
                  transition
                  focus:border-gray-500
                  focus:ring-1
                  focus:ring-gray-300

                  sm:flex-1
                "
              />

              <button
                type="button"
                className="
                  w-full
                  rounded-xl
                  bg-[#D4FB20]
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:bg-[#c8ed18]
                  active:scale-[0.98]

                  sm:w-auto
                "
              >
                Subscribe
              </button>
            </div>

            {/* Privacy text */}
            <p
              className="
                mt-3
                max-w-[500px]
                text-xs
                leading-5
                text-slate-500
              "
            >
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>

        {/* =================================================
            RIGHT SIDE - FOOTER LINKS
        ================================================== */}
        <div
          className="
            grid
            w-full
            grid-cols-2
            gap-x-8
            gap-y-10

            sm:grid-cols-3
            sm:gap-x-6

            lg:w-[55%]
            lg:grid-cols-3
            lg:gap-x-10
          "
        >
          {/* Column 1 */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-sm font-semibold text-slate-800">
              Explore
            </h3>

            <Link
              href="/courses"
              className="mb-3 text-sm text-slate-600 transition hover:text-black"
            >
              Featured Courses
            </Link>

            <Link
              href="/categories"
              className="mb-3 text-sm text-slate-600 transition hover:text-black"
            >
              Featured Categories
            </Link>

            <Link
              href="/categories/it"
              className="mb-3 text-sm text-slate-600 transition hover:text-black"
            >
              IT
            </Link>

            <Link
              href="/categories/business"
              className="mb-3 text-sm text-slate-600 transition hover:text-black"
            >
              Business
            </Link>

            <Link
              href="/categories/design"
              className="text-sm text-slate-600 transition hover:text-black"
            >
              Design
            </Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-sm font-semibold text-slate-800">
              Categories
            </h3>

            <Link
              href="/categories/development"
              className="mb-3 text-sm text-slate-600 transition hover:text-black"
            >
              Development
            </Link>

            <Link
              href="/categories/marketing"
              className="mb-3 text-sm text-slate-600 transition hover:text-black"
            >
              Marketing
            </Link>

            <Link
              href="/categories/photography"
              className="mb-3 text-sm text-slate-600 transition hover:text-black"
            >
              Photography
            </Link>

            <Link
              href="/categories/finance"
              className="mb-3 text-sm text-slate-600 transition hover:text-black"
            >
              Finance
            </Link>

            <Link
              href="/categories/sport"
              className="text-sm text-slate-600 transition hover:text-black"
            >
              Sport
            </Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-sm font-semibold text-slate-800">
              Company
            </h3>

            <Link
              href="/creators"
              className="mb-3 text-sm text-slate-600 transition hover:text-black"
            >
              Become a Creator
            </Link>

            <Link
              href="/affiliate"
              className="mb-3 text-sm text-slate-600 transition hover:text-black"
            >
              Affiliate Program
            </Link>

            <Link
              href="/help"
              className="mb-3 text-sm text-slate-600 transition hover:text-black"
            >
              Help
            </Link>

            <Link
              href="/contact"
              className="mb-3 text-sm text-slate-600 transition hover:text-black"
            >
              Contact
            </Link>

            <Link
              href="/about"
              className="text-sm text-slate-600 transition hover:text-black"
            >
              About
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FOOTER
      ====================================================== */}
      <div
        className="
          mx-auto
          flex
          w-[90%]
          max-w-[1400px]
          flex-col
          gap-4
          py-5
          text-xs
          text-slate-500

          sm:text-sm

          md:w-[88%]

          lg:w-[85%]
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Copyright */}
        <p className="text-center lg:text-left">
          © 2023 ByteSpace. All rights reserved.
        </p>

        {/* Legal Links */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-5
            gap-y-2

            lg:justify-end
            lg:gap-x-8
          "
        >
          <Link href="/privacy-policy" className="transition hover:text-black">
            Privacy Policy
          </Link>

          <Link href="/terms" className="transition hover:text-black">
            Terms of Service
          </Link>

          <Link href="/cookie-settings" className="transition hover:text-black">
            Cookie Settings
          </Link>
        </div>
      </div>
    </footer>
  );
}