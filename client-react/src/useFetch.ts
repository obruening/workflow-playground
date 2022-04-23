import { useState, useEffect } from 'react';

const useFetch = <Data> (url: string, userId: string, options?: {}) => {
  const [data, setData] = useState<Data | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    
      fetch(url, { signal: abortCont.signal, headers: {"Fake-User": userId} })
      .then(response => {
        if (!response.ok) {
          
          return response.json().then(r => { throw new Error(JSON.stringify(r)) })
        } 
        return response.json();
      })
      .then((data: Data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
          console.log(err);
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setData(null);
          //console.log("in catch");
          console.log(JSON.parse(err.message));
          setError(JSON.parse(err.message));
        }
      })
    
    // abort the fetch
    return () => abortCont.abort();
  }, [url, userId])

  return { data, isPending, error };
}
 
export default useFetch;