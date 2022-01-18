import { useEffect, useState } from "react";

const useFetch = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
try{
    const response = await fetch(url)
    const result = await response.json()
    setData(result)
}
    catch(err){
        setIsError({err,isLoading:false})
    }
   setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useFetch;

