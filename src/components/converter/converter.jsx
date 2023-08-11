
export default function Converter(Props) {
  const data = Props.Data
  return (
    <>
      <div className="h-screen bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-emerald-100 via-fuchsia-100 to-sky-200">
        <h1 className="text-center text-[42px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400">Weather Forcast</h1>
        <div className=" w-[31%] flex flex-col shadow-2xl shadow-black/30 m-auto p-4 my-6 backdrop-blur-2xl bg-[white]/20 rounded-xl">
          <div className="w-[60%] m-auto p-[2px] rounded-full max-w-sm bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            <input type="text" onChange={Props.func} className="bg-white/90 w-full rounded-full focus:outline-none p-1 pl-4 text-[16px]" placeholder="Enter Your City Name" name="name" />
          </div>
          <div className=" relative p-4 w-[100%] h-[300px] text-center flex flex-wrap mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400">
            {!data.main ?
              (
                <>
                  <div className=" absolute  left-0 p-4 w-[100%] flex justify-center flex-col space-x-2  flex h-[150px]">
                    <p className="text-black text-[18px] font-semibold mb-2 text-center" >No Data Found!</p>
                    <div aria-label="Loading..." role="status">
                      <svg className="h-12 w-12 animate-spin stroke-[#f67388] m-auto" viewBox="0 0 256 256">
                        <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line
                          x1="195.9"
                          y1="60.1"
                          x2="173.3"
                          y2="82.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="24"></line>
                        <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line
                          x1="195.9"
                          y1="195.9"
                          x2="173.3"
                          y2="173.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="24"></line>
                        <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line
                          x1="60.1"
                          y1="195.9"
                          x2="82.7"
                          y2="173.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="24"></line>
                        <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line
                          x1="60.1"
                          y1="60.1"
                          x2="82.7"
                          y2="82.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="24"></line>
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[50%] p-2 text-center ">
                    <h1 className="text-[44px] mt-6 mb-1 font-semibold ">{data.main.temp}<span className="text-[34px]">&#176;C</span></h1>
                    <h3 className="text-[22px]">{data.name}</h3>
                    <p className="text-[14px] p-1 "> {data.sys.country}</p>
                  </div>
                  <div className="w-[50%]">
                    <div className="w-[100%] h-[130px] p-2">
                      {data.weather[0].main === "Clouds" ? <img className="w-[100%] h-[120px] object-contain" src={require('../weatherIcons/Clouds.png')} alt='mo' />
                      : data.weather[0].main === "Haze" ?<img className="w-[100%] h-[120px] object-contain" src={require('../weatherIcons/Haze.png')} alt='mo' />
                      : data.weather[0].main === "Rainy" ?<img className="w-[100%] h-[120px] object-contain" src={require('../weatherIcons/Rainy.png')} alt='mo' />
                      : data.weather[0].main === "Sunny" ?<img className="w-[100%] h-[120px] object-contain" src={require('../weatherIcons/Sunny.png')} alt='mo' />
                      : data.weather[0].main === "Clear" ?<img className="w-[100%] h-[120px] object-contain" src={require('../weatherIcons/clear (2).png')} alt='mo' />
                      : data.weather[0].main === "Thunder" ?<img className="w-[100%] h-[120px] object-contain" src={require('../weatherIcons/thunder.png')} alt='mo' />
                      : data.weather[0].main === "Smoke" ?<img className="w-[100%] h-[120px] object-contain" src={require('../weatherIcons/smoke.png')} alt='mo' />
                      :<img className="w-[100%] h-[120px] object-contain" src={require('../weatherIcons/Sunny.png')} alt='mo' />}
                      
                    </div>
                    <h3 className="text-[28px]">{data.weather[0].main}</h3>
                  </div>
                  <div className="w-[100%] flex justify-between mt-10">
                    <div className="w-[50%] p-2 text-[15px]">
                      <p><span>Min : </span>{data.main.temp_min}<span className="text-[14px]">&#176;C</span></p>
                      <p><span>Humadity : </span>{data.main.humidity}%</p>
                    </div>
                    <div className="w-[50%]  p-2 text-[15px]">
                      <p><span>Max : </span>{data.main.temp_max}<span className="text-[14px]">&#176;C</span></p>
                      <p><span>Wind speed :</span> {data.wind.speed} mph</p>
                    </div>

                  </div>
                </>
              )}
          </div>
        </div>
      </div>
    </>
  )
}