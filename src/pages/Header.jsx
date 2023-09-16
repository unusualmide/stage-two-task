function Header({search, setSearch, query}) {

const {results} = query

  return (

   <ul  className="relative overflow-hidden after:clear-both after:block after:content-[''] ">
   { results?.slice(13, 18).map((result) => (
    <li key={result.id} style={{
  backgroundImage: `url(https://image.tmdb.org/t/p/original/${result?.poster_path})`,
}} className="  block h-[600px] border-2 border-gray-300 pl-3 sm:pl-[95px] pr-3 sm:pr-[98px] pt-3 sm:pt-[22px]  bg-cover bg-no-repeat relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
  <div className="flex items-center justify-center gap-8 sm:gap-[140px]">
        <div className="inline-flex items-center gap-6">
          <img src="public/tv.png" alt="tv" />
          <h3 className="hidden text-2xl font-bold text-white sm:block">MovieBox</h3>
        </div>
        <div className="inset-y-0 left-0 flex items-center justify-between ">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" w-72 sm:w-[525px] py-1.5 px-2.5 rounded-md border-2 border-gray-300 bg-transparent placeholder-white transition-transform duration-700 text-white focus:outline-none focus:border-none focus:ring-2 focus:ring-gray-500"
            placeholder="What do you want to watch?"
          />
          <img
            className="relative -left-10"
            src="public/Search.svg"
            alt="Search"
          />
        </div>
        <div className="inline-flex items-center gap-[27px]">
          <p className="hidden text-base font-bold text-white sm:block">Sign in</p>
          <img src="public/Menu.svg" alt="Menu" />
        </div>
      </div>
      <div className="pt-[93px]">
        <h1 className="w-[404px] text-white text-6xl sm:text-5xl font-bold">
          {result?.original_title}
        </h1>
        <div className="inline-flex gap-[34px] pt-4">
          <div className="inline-flex items-center gap-2.5">
            <img src="imdb.svg" alt="imdb" />
            <p className="text-xs font-normal text-white">{result?.vote_average} / 10</p>
          </div>
          <div className="inline-flex items-center gap-2.5">
            <img src="tomato.svg" alt="tomato" />
            <p className="text-xs font-normal text-white">{result?.popularity.toFixed(1)}%</p>
          </div>
        </div>
        <p className="w-[302px] text-white text-sm font-medium py-4">
          {result?.overview}
        </p>
        <button className="flex py-3 sm:py-1.5 px-5 sm:px-4 items-center gap-2 bg-rose-700 rounded-md">
          <img src="Play.svg" alt="Play" />
          <p className="text-sm font-bold text-white uppercase">
            watch trailer
          </p>
        </button>
      </div>
      <div className="w-9 h-[110px] gap-2.5  absolute inset-y-0 top-[245px] right-0 rounded-md font-bold">
        <p className="text-xs text-gray-400">1</p>
        <p className="text-xs text-gray-400">2</p>
        <p className="text-white">3</p>
        <p className="text-xs text-gray-400">4</p>
        <p className="text-xs text-gray-400">5</p>
      </div> 
     
    </li>  ))}
    </ul>
  );
}

export default Header;
