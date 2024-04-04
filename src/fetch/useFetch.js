import { useState, useEffect } from "react";

const useFetch = (search) => {
  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });
const KEY=process.env.REACT_APP_KEY
const URL=`http://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${search}&days=3&q=07112`


console.log(data.results);
console.log(URL);
  useEffect(()=>{
fetch(URL)
.then((res)=>res.json())
.then((results)=>setData({results, loading:false, error:null}))
.catch((error)=>setData({results:null, loading: false, error}))
  },[URL])

  return data
};

export default useFetch;
