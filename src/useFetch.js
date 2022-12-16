import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // abort controller function stops the fetch from running when a route component isnt in browser
    const abortCont = new AbortController()
    // adding abort controller
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        // checking to see if there is an error in the response object
        if (!res.ok) {
          throw Error("Could not fetch the data.");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      });
      return () => abortCont.abort();
    // dependency array allows useEffect to only re-render 1 time
  }, [url]);

  return { data, isLoading, error }

}

export default useFetch