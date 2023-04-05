import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { httpClient } from "../apis/httpClient";

function useComplexSetting() {
  const { user } = useAuthContext();
  const [complexList, setComplexList] = useState();

  const get = async () => {
    try {
      const response = await httpClient(
        "/api/v2/nms/complex/complex_list",
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.errorCode) {
        setComplexList(response.data);
      }
    } catch (e) {
      console.error(e?.code);
    }
  };

  const update = async (data) => {
    try {
      const response = await httpClient(
        "/api/v2/nms/complex/complex_list",
        {
          method: "patch",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
          data: data,
        }
      );

      if (!response.errorCode) {
        setComplexList(response.data);
      }
    } catch (e) {
      console.error(e?.code);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return { complexList, update };
}

export { useComplexSetting };
