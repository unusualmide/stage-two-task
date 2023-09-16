import { Link } from "react-router-dom";


function AppNav() {
  return (
    <nav className="w-44 sm:min-w-[226px]  sm:min-h-[982px] bg-white border  border-black/30 rounded-tr-[45px] rounded-br-[45px]">
    <div className="pt-[52px] pl-5 inline-flex items-center gap-5">
      <img src="tv.png" alt="tv" />
      <h2 className="hidden text-2xl font-bold text-bleck-100 sm:block">MovieBox</h2>
    </div>
    <div className="flex  flex-col  pt-20 sm:pt-[107px] gap-[75px] text-start">
      <Link to='/home' className="flex gap-[15px]">
        <img className="pl-5 sm:pl-[42px]" src="/Home.svg" alt="home" />
        <p className="hidden text-lg font-semibold text-bleck-200 sm:block">Home</p>
      </Link>
      <Link className="flex gap-[15px]">
        <img className="pl-5 sm:pl-[42px]" src="/Movie Projector.svg" alt="movie projector" />
        <p className="hidden text-lg font-semibold text-bleck-200 sm:block">Movies</p>
      </Link>
      <Link className="flex gap-[15px]">
        <img className="pl-5 sm:pl-[42px]" src="/TV Show.svg" alt="TV" />
        <p className="hidden text-lg font-semibold text-bleck-200 sm:block">TV Series</p>
      </Link>
      <div className="flex  gap-[15px]">
        <img className="pl-5 sm:pl-[42px]" src="/Calendar.svg" alt="Calender" />
        <p className="hidden text-lg font-semibold text-bleck-200 sm:block">Upcoming</p>
      </div>
    </div>
    <div className="flex justify-center items-center pt-[78px]">
      <div className="w-[170px] px-4 h-[210px] hidden sm:block rounded-[20px] border border-red-70%/70 bg-red-40%/40">
        <p className="font-semibold text-[15px] pt-[42px] w-[137px] h-[69px] text-bleck-100/80">
          Play movie quizes and earn free tickets
        </p>
        <p className="text-xs w-[139px] h-9 font-medium text-bleck-200 pt-12">
          50k people are playing now
        </p>
        <div className="flex items-center justify-center">
          <button className="w-[112px] h-[30px] rounded-[30px] mt-12 bg-red-70%/20 text-xs font-medium text-red-70%">
            Start playing
          </button>
        </div>
      </div>
    </div>
    <Link className="flex  gap-[15px] p-[42px] pt-[44px]">
      <img src="/Logout.svg" alt="Logout" />
      <p className="hidden text-lg font-semibold text-bleck-200 sm:block">Log out</p>
    </Link>
  </nav>
  )
}

export default AppNav
