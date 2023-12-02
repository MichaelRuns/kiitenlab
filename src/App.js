import './App.css';
import { Tab } from '@headlessui/react';
import AboutPanel from './panels/AboutPanel';
import ProgramsPanel from './panels/ProgramsPanel';
import PublicationsPanel from './panels/PublicationsPanel';
function App() {
  return (
   <div className='bg-slate-900 grid grid-rows-[10%,90%]'>
    <div className='bg-blue-400 flex flex-row w-1/4 bg-white border border-4 border-yellow-300'>
      <img  className={'h-3/4 md:h-full -translate-x-5 md:translate-x-0 border-0 border-transparent'} src={process.env.PUBLIC_URL + '/kitten_logo.jpeg'} alt="Example" />
      <div className='flex items-center justify-center -translate-x-5 md:translate-x-0 font-semibold text-sm italic font-sans md:text-2xl'> {`Vernau Kitten Lab`}</div>
    </div>
    <div>
      <Tab.Group>
      <Tab.List className={'w-screen flex justify-between gap-2 p-1 bg-slate-100'}>
        <Tab className={({ selected }) =>
      `py-2 px-4 w-1/4 cursor-pointer  flex items-center justify-center ${
        selected
          ? 'bg-gray-800 text-white'
          : 'bg-gray-200 text-gray-800'
      }`
    }> About Us</Tab>
        <Tab className={({ selected }) =>
      `py-2 px-4 w-1/4 cursor-pointer flex items-center justify-center ${
        selected
          ? 'bg-gray-800 text-white'
          : 'bg-gray-200 text-gray-800'
      }`
    }> Programs</Tab>
        <Tab className={({ selected }) =>
      `py-2 px-4 w-1/4 cursor-pointer flex items-center justify-center ${
        selected
          ? 'bg-gray-800 text-white'
          : 'bg-gray-200 text-gray-800'
      }`
    }> Publications</Tab>
        <button 
          className='bg-yellow-500 rounded py-2 px-2 cursor-pointer hover:bg-yellow-600 w-1/4  font-bold'
          onClick={() =>{
            window.open('https://www.vetmed.ucdavis.edu/giving/ways-give', '_blank');
          }}>
            Donate</button>
      </Tab.List>
      <Tab.Panels className={'bg-slate-400'}>
        <Tab.Panel> <AboutPanel/></Tab.Panel>
        <Tab.Panel><ProgramsPanel/></Tab.Panel>
        <Tab.Panel><PublicationsPanel/></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
   </div>
  );
}

export default App;
