import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url, config) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (url, config) => {
    setLoading(true);
    setData(null);
    setError(null);
    try {
      const response = await axios({ url: url, ...config });
      setData(response.data);
    } catch (e) {
      setLoading(false);
      setError(`Request Error ${e.message}`);
    }
  };

  useEffect(() => {
    fetchData(url, config);
  });

  return { data, loading, error, fetchData };
}

export { useFetch };
