import { Link } from "react-router-dom";

function Search({ result }) {
  const { id } = result;

  return (
    <Link to={`movies/${id}`} data-testid="movie-card">
      <div
        data-testid="movie-poster"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300/${result.poster_path})`,
        }}
        className=" sm:w-40 h-[270px] sm:h-[220px]  py-[15.58px] px-4 rounded-lg"
      >
        <div className="flex items-start justify-center">
          <p className="font-bold bg-white-50%/50 text-gray-900 backdrop-blur-sm rounded-xl py-[3px] px-2 w-[74px] h-[22px]  text-[11px] leading-normal">
            TV SERIES
          </p>
          <button className="ml-auto">
            <img src="public/Favorite.svg" alt="Favorite" />
          </button>
        </div>
      </div>
      <h4
        data-testid="movie-title"
        className="pt-3 text-gray-900 text-[18px] font-bold"
      >
        {result.title}
      </h4>
      <div className="inline-flex items-center gap-2.5 pt-2">
        <img src="imdb.svg" alt="imdb" />
        <p className="text-xs font-normal text-gray-900">
          {result.vote_average.toFixed(1)} / 10
        </p>
      </div>
      <p className="pt-2 text-xs font-bold text-grey-400">
        Action,Adventure,Horror
      </p>
    </Link>
  );
}

export default Search;
