import axios from 'axios';
import { useState, useEffect } from 'react';
import { Order } from './model/task/order';
import { TaskPayload } from './model/task/taskPayload';


export const putTaskPayload = (taskPayload: TaskPayload, 
                        userId: string,
                        setError: React.Dispatch<React.SetStateAction<string | null>>) => {

  axios.put<Order>('/api/tasks', taskPayload, { headers: { "Fake-User": userId } })
      .then(response => {
          console.log(response.data);
      })
      .catch(error => {
        setError("Es ist ein Fehler aufgetreten");
      });

}


export const useFetchError = <Data>(
  url: string,
  userId: string,
  setError: React.Dispatch<React.SetStateAction<string | null>>) => {

  const [data, setData] = useState<Data | null>(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal, headers: { "Fake-User": userId } })
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

  return { data, isPending };
}

