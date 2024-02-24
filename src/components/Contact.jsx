// import React from 'react'

function Contact() {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 py-16 p-4'>
      <h1 className=' text-center text-4xl text-[#001b5e] font-bold py-4xl '>contact Me</h1>
      <form action="https://getform.io/f/7e5mqZe2" method='post' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className=' flex flex-col '>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className=' rounded-lg border-2 p-3 flex border-gray-300 ' type="text" name='name' />
          </div>
          <div className=" flex flex-col ">
            <label className='uppercase text-sm py-2'>Phone </label>
            <input className=' rounded-lg border-2 p-3 flex border-gray-300 ' type="text" name='phone' />
          </div>
          <div className=" flex flex-col py-2 ">
            <label className='uppercase text-sm py-2'>Email</label>
            <input className=' rounded-lg border-2 p-3 flex border-gray-300 ' type="text" name='email' />
          </div>
          <div className=" flex flex-col py-2">
            <label className='uppercase text-sm py-2'>Subject</label>
            <input className=' rounded-lg border-2 p-3 flex border-gray-300 '  type="text" name='subject' />
          </div>
          <div className="flex flex-col py-2">
            <label className='uppercase text-sm py-2'>Message</label>
            <textarea className="rounded-lg border-2 p-3 flex border-gray-300" name="message"  rows="10"></textarea>
          </div>
        </div>
        <button className=" bg-[#001b5e] text-gray-100 w-full mt-2 rounded-full p-4 lg:size-40 lg:h-12 ">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact