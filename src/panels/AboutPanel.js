import { CameraIcon } from '@heroicons/react/outline'
function AboutPanel() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center rounded p-2">
            <div className="w-4/5 h-4/5 bg-slate-200 rounded grid grid-rows-1 grid-cols-2">
                <CameraIcon className="w-full h-full bg-slate-900 text-white"/>
                <div className='flex items-begin justify-begin'>
                    {"We are the kitten lab. We do kitten stuff."}
                </div>
            </div>
            <div> Dr.1</div>
            <div> Dr.2</div>
            <div> Dr.3</div>
            <div> Dr.4</div>
            <div> Dr.5</div>
    </div>
  );
}
 export default AboutPanel;