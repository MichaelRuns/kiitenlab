import './App.css';
import { Tab } from '@headlessui/react';
function App() {
  return (
   <div>
    <div className='bg-blue-800'>
      UCD LOGO
    </div>
      <Tab.Group>
      <Tab.List className={'w-screen flex justify-between gap-1 bg-slate-100'}>
        <Tab> About Us</Tab>
        <Tab> Programs</Tab>
        <Tab> Publications</Tab>
        <div className='bg-yellow-500 rounded'> Donate</div>
      </Tab.List>
      <Tab.Panels className={'bg-slate-400 h-screen'}>
        <Tab.Panel> About us</Tab.Panel>
        <Tab.Panel> Programs</Tab.Panel>
        <Tab.Panel>Publications</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
   </div>
  );
}

export default App;
