"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div
      className="min-h-dvh bg-blue-700
    bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
    bg-[size:72px_72px]"
    >
      <section
        className="
    min-h-vh flex flex-col md:flex-row items-center
  "
      >
        <div className="left flex flex-col w-[90%] h-auto md:w-[45%] md:ml-[30px] md:mt-0">
          <Link href="/">
            <div className=" vector_logo my-4 ml-5 w-[40px] h-[40px]">
              <Image
                src="/Logo-Vector.png"
                width={80}
                height={80}
                alt="bytespace-logo"
                loading="eager"
                fetchPriority="high"
                className="h-auto w-[150px] md:w-[180px]"
              />
            </div>
          </Link>
          <div className="paragraph mt-6 w-[80%] md:w-[80%] text-slate-300 ml-5">
            <h2 className="text-[20px] font-bold">
              {isLogin ? "Sign in with ease" : "Sign up and come in"}
            </h2>
            <p className="text-[18px] mt-3">
              {isLogin
                ? "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
                : "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"}
            </p>
          </div>
          <div className="relative card ml-5 mt-[150px]">
            <Image
              src="/login_Course_Card_back.png"
              width={400}
              height={200}
              alt="course-card"
              loading="eager"
              fetchPriority="high"
            />
            <Image
              className="absolute top-[-20%] right-[20%]"
              src="/login_Course_Card_1.png"
              width={400}
              height={200}
              alt="course-card"
              loading="eager"
              fetchPriority="high"
            />
            {/* zigzag vector */}
            <Image
              className="absolute bottom-[-1%] right-[15%] z-10"
              src="/login_zigzag.png"
              width={130}
              height={200}
              alt="course-card"
              loading="eager"
              fetchPriority="high"
            />

            {/* circle vector */}
            <Image
              className="absolute top-[-15%] right-[70%]"
              src="/circle-Cone.png"
              width={150}
              height={80}
              alt="course-card"
              loading="eager"
              fetchPriority="high"
            />

            {/* review */}
            <Image
              className="absolute bottom-[-12%] right-[13%]"
              src="/login_student_review.png"
              width={220}
              height={80}
              alt="course-card"
              loading="eager"
              fetchPriority="high"
            />

            {/* cone */}
            <Image
              className="absolute bottom-[-20%] left-[0%]"
              src="/Cone.png"
              width={200}
              height={80}
              alt="course-card"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* -----------login sinup form---------- */}
        <div className="main-form-login-signup flex items-center justify-center rounded-2xl justify-self-center bg-slate-200 w-[85%] md:w-[40%] mt-25 mb-5 md:mt-0 md:mb-0">
          <div className=" w-[80%] rounded-xl bg-slate-200 py-5 px-4">
            <p className="text-blue-600 pt-5">Sign In</p>
            <p className="text-[44px] font-bold">
              {isLogin ? "Welcome Back" : "Welcome to ByteSpace"}
            </p>
            <p className={`pt-8 ${isLogin ? "hidden" : "block mt-8"} `}>Full Name</p>
            <input
              className={`w-full py-2 pl-3 border rounded ${isLogin ? "hidden" : "block"}`}
              type="text"
              placeholder="Arick Ahamed"
            />
            <p className={`${isLogin?" block pt-8":"mt-3"} pt-8`}>Email</p>
            <input
              className="w-full py-2 pl-3 border rounded"
              type="email"
              placeholder="arickahamed@doin.tech"
            />
            <p className="mt-3">password</p>
            <input
              className="w-full py-2 pl-3 border rounded"
              type="password"
              placeholder="******"
            />
            <button className="bg-green-300 py-1 px-2 rounded-xl text-slate-700 flex justify-self-end mt-2 cursor-pointer">
              {isLogin ? "Sign In" : "Continue"}
            </button>

            {/* --------------or--------- */}
            <div
              className={`${isLogin ? "flex" : "hidden"} items-center my-12.5 w-full`}
            >
              {/* Left Line */}
              <div className="flex-grow border-t border-gray-400"></div>

              {/* "or" Text */}
              <span className="flex-shrink mx-4 text-gray-400 text-sm font-normal">
                or
              </span>

              {/* Right Line */}
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            {/* facebook & google */}
            <div
              className={`${isLogin ? "flex" : "hidden"} w-full gap-2 justify-center items-center text-3xl`}
            >
              <div className="border rounded-xl p-1">
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className="border rounded-xl p-1">
                <i class="fa-brands fa-google"></i>
              </div>
            </div>

            {/* new user */}
            <div className="mt-10 flex justify-center items-center mb-0">
              <p className="text-slate-400">
                {isLogin ? "New user ?" : "Already have an account?"}
                <a
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-500 cursor-pointer"
                >
                  {isLogin ? "Create an account" : "Login"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



