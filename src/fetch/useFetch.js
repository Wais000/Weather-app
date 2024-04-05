import { useState, useEffect } from "react";

const useFetch = (search) => {
  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });

  const KEY = process.env.REACT_APP_KEY; // Accessing the API key from environment variables
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${search}&days=3&q=07112`;

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          // Check if API key is disabled
          if (res.status === 403) {
            throw new Error("API key has been disabled");
          } else {
            throw new Error("Failed to fetch data");
          }
        }
        return res.json();
      })
      .then((results) => setData({ results, loading: false, error: null }))
      .catch((error) => setData({ results: null, loading: false, error }));
  }, [URL]);

  return data;
};

export default useFetch;

