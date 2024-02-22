// import React from 'react'
// import gion from '../image/gion.jpg';
import lms from '../image/lms.jpg';
import todo from '../image/todo.png';
import gion from '../image/gion.jpg';
import ProjectItems from './ProjectItems'

function project() {
  return (
    <div id='project' className=' max-w-[1040px] m-auto md-pl-20 p-4 py-16 '>
      <h1 className='text-center font-bold text-4xl text-[#001b5e]'>
        projects
      </h1>
      <p>
      Thats great to hear! Heres a basic example of a Contact Me section in React using JavaScript.
      This assumes you have a form component and want to handle the form submission:
      </p>
<div className='grid sm:grid-cols-2 gap-10 pt-5 '>
        <ProjectItems img={lms} title='LMS ' />
        <ProjectItems img={gion} title='Gion ' />
        <ProjectItems img={todo} title='ToDo ' />

        {/* <ProjectItems img={} title='seya app' /> */}

</div>
    </div>
  )
}

export default project;