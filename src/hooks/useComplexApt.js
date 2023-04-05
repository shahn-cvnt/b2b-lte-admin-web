import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { httpClient } from "../apis/httpClient";

function useComplexApt(dong) {
  const { user } = useAuthContext();
  const [apt, setApt] = useState();

  const get = async () => {
    try {
      const response = await httpClient(
        "/api/v2/nms/complex/dongdetail/" + dong,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.errorCode) {
        setApt(response.data);
      }
    } catch (e) {
      console.error(e?.code);
    }
  };

  const update = async (data) => {
    try {
      const response = await httpClient(
        "/api/v2/nms/complex/dongdetail/" + dong,
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
        setApt(response.data);
      }
    } catch (e) {
      console.error(e?.code);
    }
  };

  const getHo = async (ho) => {
    let result = null;
    try {
      const response = await httpClient(
        "/api/v2/nms/complex/hodetail/" + ho,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          }
        }
      );

      if (!response.errorCode) {
        result = response.data;
      }
    } catch (e) {
      console.error(e);
    }

    return result;
  };

  useEffect(() => {
    get();
  }, []);

  return { apt, update, getHo };
}

export { useComplexApt };
