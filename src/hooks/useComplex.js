import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
// import axios from "axios";
import { axios } from "../apis/httpClient";


function useComplex() {
  const { user } = useAuthContext();
  const [complexData, setComplexData] = useState();

  useEffect(() => {
  }, []);

  return { complexData };
}

export { useComplex };
