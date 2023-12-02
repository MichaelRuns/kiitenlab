import { CameraIcon } from '@heroicons/react/outline'

const doctors = [
  {
    first_name: "Karen",
    last_name: "Vernau",
    picture: `${process.env.PUBLIC_URL}/karen_vernau_bean.jpeg`,
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
                <div className='bg-slate-200 flex flex-col w-2/3 h-full'>
                  <div className='font-bold h-full flex border-b border-black'>
                    {doctor.first_name + " " + doctor.last_name}
                  </div>
                  <div className='flex flex-row'> 
                    <div className='h-fit overflow-hidden flex items-center border-r border-black'>
                      <img className='h-full' src={doctor.picture} alt='profile picture' width={300} height={300}/>
                    </div>
                    <div className='h-full flex p-2'>
                      <div>{doctor.bio}</div>
                    </div>
                  </div>
                </div>
              );
            })}
    </div>
  );
}
 export default AboutPanel;