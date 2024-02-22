// import React from 'react'

function ProjectItems({img,title}) {
  return (
    <div className=" relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
      <img src={img} alt="/" className=" rounded-lg group-hover:opacity-25 " />
      <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className=" text-2xl font-bold text-white tracking-wider text-center ">
          {title}
        </h3>
        <a href="" className=" block rounded-full ">More Info</a>
      </div>
    </div>
  )
}
export default ProjectItems;
