import React, { useState, useEffect } from 'react'

const FetchApi = (url, body = null) => {
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState('Loading Data');
  const [ loading, setLoading ] = useState(true);

  useEffect(()=>{
    let API = null;
    if(body)
    {
      API = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    } else {
      API = fetch(url);
    }
    API
    .then( response => response.json())
    .then((response) => {
      setLoading(false);
      if (Object.keys(response).length > 0) {
        setData(response);
      } else {
        setError("No Records Found");
      }
    })
    .catch((err) => setError(err));
  }, [body, url])

  return {
    loading: loading,
    data: data,
    error: error
  };
}

export default FetchApi;