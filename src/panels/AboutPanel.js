import { CameraIcon } from '@heroicons/react/outline'

const doctors = [
  {
    first_name: "Karen",
    last_name: "Vernau",
    picture: null,
    bio: "lorem ipsum haha xd"
    },
    {
      first_name: "Doctor",
      last_name: "McDoctorson",
      picture: null,
      bio:"does doctor things"
    },
    {
      first_name: "Doctor",
      last_name: "McDoctorson",
      picture: null,
      bio:"does doctor things"
    },
    {
      first_name: "Doctor",
      last_name: "McDoctorson",
      picture: null,
      bio:"does doctor things"
    },
]
function AboutPanel() {
  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-center rounded p-2">
            <div className="w-4/5 bg-slate-200 rounded grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2">
                <CameraIcon className="w-full h-full bg-slate-900 text-white"/>
                <div className='flex items-begin justify-begin'>
                    {"We are the kitten lab. We do kitten stuff."}
                </div>
            </div>
            {doctors.map((doctor) =>{
              return (
                <div className='bg-slate-200 grid grid-rows-3 grid-cols-1 w-2/3'>
                  <div className='font-bold'>
                    {doctor.first_name + " " + doctor.last_name}
                  </div>
                  <div>
                    {doctor.picture? <img src={`{}`}/>: <CameraIcon className='w-5'/>}
                  </div>
                  <div>
                    {doctor.bio}
                  </div>
                </div>
              );
            })}
    </div>
  );
}
 export default AboutPanel;