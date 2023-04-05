import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { httpClient } from "../apis/httpClient";

function useComplexOffice() {
  const { user } = useAuthContext();
  const [office, setOffice] = useState();

  const get = async () => {
    try {
      const response = await httpClient(
        "/api/v2/nms/complex/office",
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.errorCode) {
        setOffice(response.data);
      }
    } catch (e) {
      console.error(e?.code);
    }
  };

  const update = async (data) => {
    try {
      const response = await httpClient(
        "/api/v2/nms/complex/office",
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
        setOffice(response.data);
      }
    } catch (e) {
      console.error(e?.code);
    }
  };


  useEffect(() => {
    get();
  }, []);

  return { office, update };
}

export { useComplexOffice };
