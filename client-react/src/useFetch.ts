import { useState, useEffect } from 'react';


const useFetch = <Data> (url: string, userId: string) => {
  const [data, setData] = useState<Data | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal, headers: {"Fake-User": userId} })
      .then(res => {
        if (!res.ok) { // error coming back from server
          //throw Error('could not fetch the data for that resource');
          
          return res.json().then(r => {
              
              //console.log(r);
              throw new Error(JSON.stringify(r))})
              
          
           
        } 
        return res.json();
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
    }, 0);

    // abort the fetch
    return () => abortCont.abort();
  }, [url, userId])

  return { data, isPending, error };
}
 
export default useFetch;