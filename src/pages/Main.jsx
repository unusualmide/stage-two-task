import Loader from "./Loader";
import Search from "../components/Search";
import Error from "./Error";
import MovieList from "../components/MovieList";
function Main({ search, results, result, error, isLoading }) {
  return (
    <main className="pt-6 sm:pt-[70px] pl-6 sm:pl-[98px] pr-6 sm:pr-[102px]">
      <div className="flex items-center justify-center pb-11">
        <h2 className="text-3xl font-bold text-black sm:text-4xl">
          Featured Movie
        </h2>
        <a className="flex items-center gap-2 ml-auto" href="#">
          <p className="text-base font-normal sm:text-lg text-rose-700">
            See More
          </p>
          <img src="Chevron right.png" alt="Chevron right" />
        </a>
      </div>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-3 place-content-center place-items-center gap-x-20 gap-y-[103px]">
            {error ? (
              <Error />
            ) : (
              results
                ?.slice(0, 10)
                .map((movie) => <MovieList movie={movie} key={movie.id} />)
            )}
          </ul>
        )}
      </div>

      <div>
        {search && (
          <ul className="grid grid-cols-2 sm:grid-cols-3 grid-flow-row absolute overflow-y-scroll inset-x-0 top-20 left-4 sm:left-[400px] p-2 sm:p-3 gap-x-7 gap-y-7 border rounded-lg bg-white w-[450px] sm:w-[600px] h-[500px]">
            {result?.map((result) => (
              <Search result={result} key={result.id} search={search} />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default Main;
