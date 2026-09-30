import Image from 'next/image';
import Navbar from '../components/Navbar';
import { searchData } from '../assets/course-searchdatat';
export default function Joinus() {
  return (
    <div className="w-full m-0 p-0 box-border">
      <div
        className="w-full h-[10%] bg-blue-700
    bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
    bg-[size:72px_72px]"
      >
        <Navbar />
        <p className="mt-17.5 mb-3 text-[44px] font-bold text-slate-300 text-center">
          Find Your Next Course
        </p>
        <div className="flex items-center justify-center gap-2 pb-8">
          <input
            className="pl-3 py-2 w-[350px] rounded-xl bg-slate-200"
            type="search"
            placeholder="Search"
          />
          <p className="py-1.5 px-2 bg-[#D4FB20] rounded-xl font-bold text-black text-[18px]">
            Courses
          </p>
        </div>
      </div>
      {/* filter and course part */}
      <div className="w-[85%] mt-10 flex justify-self-center flex-col border border-red-600">
        <div className="flex itemscenter justify-between text-[14px] text-slate-600">
          <div className="flex gap-2">
            <div className="flex items-center justify-center border border-gray-400 px-2 rounded-xl">
              <i class="fa-solid fa-filter"></i>
              <p>filter</p>
            </div>
            <div className="flex items-center justify-center border border-gray-400 px-2 rounded-xl">
              <i class="fa-solid fa-chart-simple"></i>
              <p>level</p>
            </div>
            <div className="flex items-center justify-center border border-gray-400 px-2 rounded-xl">
              <i class="fa-solid fa-table-cells-large"></i>
              <p>category</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center border border-gray-400 py-1 px-2 rounded-xl">
              <i class="fa-regular fa-star"></i>
              <p>most relavent</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-around gap-2 py-2">
            {searchData?.map((data) => (
              <p key={data.i} className="inline py-1 px-2 rounded-xl bg-gray-200 mb-10">
                {data}
              </p>
            ))}

          </div>
        </div>
        {/* <Image 
        src="/join_us_filter.png"
        width={500}
        height={200}
        alt="filter image"
        /> */}
      </div>
    </div>
  );
}
