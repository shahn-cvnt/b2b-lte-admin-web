import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { httpClient } from "../apis/httpClient";

function useComplexAptGroup() {
  const { user } = useAuthContext();
  const [aptGroup, setAptGroup] = useState([]);

  const update = async () => {
    try {
      const response = await httpClient("/api/v2/nms/complex/dong", {
        method: 'get',
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        }
      });
  
      if (!response.errorCode) {
        setAptGroup(response.data.list);
      } else {
        throw new Error();
      }
    } catch (e) {
      console.error(e?.code)
    }
  }

  useEffect(() => {
    update();
  }, []);

  return { aptGroup };
}

export { useComplexAptGroup };
