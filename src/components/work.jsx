import Workitems from './workitems';
const data=[
  {
    "year": "Year 1",
    "title": "Computer Engineering Student",
    "duration": "2020-2024",
    "detail": "As a dedicated Computer Engineering student at Bahir Dar University, I am actively pursuing a Bachelor's degree, \nspecializing in the intersection of hardware and software systems.My coursework includes a comprehensive study of \ncomputer architecture, digital systems design, programming languages, and algorithm development.\nFurthermore, I have contributed to the development of software applications, leveraging my backend knowledge in \nPostgreSQL, Hasura, and Docker. My involvement in these projects has taught me valuable lessons in software architecture, \ndatabase management, and version control."
  },
  {
    "year": "Year 2",
    "title": "Project Title 2",
    "duration": "Duration 2",
    "detail": "Detail 2"
  },
]
function work() {
  return (
    <div id="work" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" text-4xl font-bold text-center text-[#001b5e]">work Experiance</h1>
        {data.map((item,idx) => (
           <Workitems key={idx} 
           year={item.year}
            title={item.title}
             duration={item.duration}
              detail={<pre>{item.detail}</pre> } />
        )
        
        )}
    </div>
  )
}

export default work