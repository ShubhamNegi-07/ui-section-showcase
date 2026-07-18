import Image from '../../assets/bed.jpg';

const Header = () => {
  return (
    <div>
      <div className="px-2 py-4 h-full w-full flex justify-between">
        <h2 className="px-6 text-2xl">Menu</h2>
        <h3 className="text-4xl">HORIZON</h3>
        <button className=" rounded-full group relative flex h-14 w-40 items-center justify-center overflow-hidden
  border-2 border-white bg-black px-6 text-lg font-bold text-white
  shadow-[6px_6px_0px_#00a4ef]
  transition-all duration-150
  hover:-translate-x-1 hover:-translate-y-1
  hover:shadow-[10px_10px_0px_#000]
  active:translate-x-1 active:translate-y-1
  active:bg-white active:text-black
  active:border-black
  active:shadow-none">
          <span className="absolute inset-0 overflow-hidden">
            <span className="absolute top-0 left-[-120%] h-full w-1/2-skew-x-12 bg-gradient-to-r-from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"/>
          </span>
          <span className="relative z-10">Hin / Eng</span>
        </button>
      </div>
      <div className="flex gap-20 mt-15 px-2 py-4">
      <div className="h-172 w-full flex flex-wrap justify-between p-4">
        <div className="text-8xl">Contact us</div>
        <p className="mt-12 text-xl font-medium">Get with touch in with us for any enquiries and questions</p>
        <button className='text-2xl mt-117'>Facebook</button>
        <button className='text-2xl mt-117'>Instagram</button>
        <button className='text-2xl mt-117'>Telegram</button>
      </div>
      <div className="">

      <div className="mb-1 h-70 w-211">

        <div className="m-3 inline-block">
        <h3 className='px-7 py-6 font-bold'><h4 className="text-gray-500">general inquiries</h4> 
            <span>work@horizonsstudio.work</span> <br/>+791129692117</h3>
        </div>
        <div className="ml-62 inline-block">
        <h3 className='px-7 py-6 font-bold'><h4 className="text-gray-500">careers</h4> 
            <span>hr@horizonstudio.work</span></h3>
        </div>
        <div className="m-3 inline-block">
        <h3 className='px-7 py-6 font-bold'><h4 className="text-gray-500">collabrations</h4> 
            <span>n.karpova@horizonstudio.work</span> <br/>+791129692117</h3>
        </div>
        <div className="ml-54 inline-block">
        <h3 className='px-7 py-6 font-bold'><h4 className="text-gray-500">address</h4> 
            <span>191189, St. Petersburg.</span> <br/>Moika River Embankment 67-69</h3>
        </div>
      </div>
      <div className="h-100 w-211"><img className="h-full w-full object-fit" src={Image} alt="" /></div>

      </div>
      </div>
    </div>
  )
}

export default Header
