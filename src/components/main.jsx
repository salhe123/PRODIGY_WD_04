import { TypeAnimation } from 'react-type-animation';
import seya from '../image/seya.jpg';
import {FaTwitter,FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa';
export const Main = () => {
  return (
    <div id='main'>
        <img className=' w-full h-screen object-cover object-left scale-x-[-1]' src={seya} alt="esuba" />
        <div className=' w-full h-screen absolute top-0 left-0 bg-white/50'> 
               <div className=' max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className=' sm:text-5xl text-4xl font-bold text-gray-800'> I'am Salhe Seid</h1>
                <h2 className=' flex sm:text-3xl text-2xl text-gray-800 pt-4 '> 
                I'a
                <TypeAnimation
      sequence={[ 
        'Developer',
        2000,
        'Coder',
        2000,
        'Free-lancer',
        2000,
      ]}
      wrapper="div"
      cursor={true}
      style={{ fontSize: '2em',paddingLeft:'5px' }}
      repeat={Infinity}
    />
                </h2>
                <div className=' pt-6 flex justify-between w-full max-w-[200px]'>
                  <FaFacebook className=' cursor-pointer' size={30}/>
                  <FaTwitter className=' cursor-pointer' size={30}/>
                  <FaInstagram className=' cursor-pointer' size={30}/>
                  <FaLinkedin className=' cursor-pointer' size={30}/>
                </div>
               </div>
        </div>
    </div>
  );
};

 // Exporting as default
