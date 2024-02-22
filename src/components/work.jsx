import Workitems from './workitems';
const data=[
  {
    "year": "Year 1",
    "title": "Project Title 1",
    "duration": "Duration 1",
    "detail": "Detail 1"
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
              detail={item.detail} />
        )
        
        )}
    </div>
  )
}

export default work