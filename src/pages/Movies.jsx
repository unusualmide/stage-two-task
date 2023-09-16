import AppNav from "../components/AppNav";
import Loader from "./Loader";
import MovieDetails from "./MovieDetails";
import Error from "./Error";
import { useEffect, useState } from "react";

function Movies() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex movies">
      {error ? (
        <Error />
      ) : (
        <>
          <AppNav />
          <MovieDetails setIsLoading={setIsLoading} setError={setError} />
        </>
      )}
    </div>
  );
}

export default Movies;
