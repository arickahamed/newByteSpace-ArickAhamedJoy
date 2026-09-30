import React from 'react'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function notFound() {
  return (
    <div className="w-full m-0 p-0 box-border">
      <div
        className="min-h-[70%] pb-10 bg-blue-700
    bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
    bg-[size:72px_72px]"
      >
        <Navbar />
        <div className="w-[80%] flex flex-col justify-self-center items-center justify-center relative">
          <p className="text-[400px] font-bold leading-none bg-linear-to-b from-[rgba(212,251,32,1)] to-[rgba(255, 255, 255, 0)] bg-clip-text text-transparent">
            404
          </p>
          <p className="text-[50px] text-center text-slate-300 font-bold absolute bottom-[-40px]">
            The page you are looking <br />
            for dosen't exist
          </p>
        </div>
        <div>
          <p className="text-[18px] text-center mt-20 mb-10 text-slate-200">
            Try to use a correct url or go back to homepage to start again
          </p>
            <Link href="/" className=" flex text-[18px] justify-self-center border border-green-200 py-2 px-4 rounded-xl bg-[#D4FB20]">
              Back to Home
            </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

