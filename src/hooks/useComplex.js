import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { httpClient } from "../apis/httpClient";
import { useLocalStorage } from "./useLocalStroage";

// 아파트 동 목록 조회
function useComplexInfo() {
  const { user } = useAuthContext();
  const [storedComplexInfo, setStoredComplexInfo] = useLocalStorage(
    "cvnt_current_complex"
  );
  const [complexInfo, setComplexInfo] = useState(storedComplexInfo || "");

  // 초기화 시, 로컬스토리지 정보가 없으면 단지정보 요청
  useEffect(() => {
    // if (!storedComplexInfo) {
      fetchData();
    // }
  }, []);

  // ComplexInfo 정보 변경 시, 로컬스토리지 값 세팅
  useEffect(() => {
    setStoredComplexInfo(complexInfo);
  }, [complexInfo])


  const fetchData = async () => {
    try {
      const response = await httpClient("/api/v2/complex/complex_info", {
        method: "get",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const result = response.data;

      if (!result.errorCode) {
        setComplexInfo(result);
      } else {
        throw new Error(result.errorCode);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return { complexInfo, fetchData };
}

function useComplexAptGroup() {
  const { user } = useAuthContext();
  const [aptGroup, setAptGroup] = useState([]);

  const update = async () => {
    try {
      const response = await httpClient("/api/v2/nms/complex/dong", {
        method: "get",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.errorCode) {
        setAptGroup(response.data.list);
      } else {
        throw new Error();
      }
    } catch (e) {
      console.error(e?.code);
    }
  };

  useEffect(() => {
    update();
  }, []);

  return { aptGroup };
}

// 아파트 동 정보 조회
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
      const response = await httpClient("/api/v2/nms/complex/hodetail/" + ho, {
        method: "get",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

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

// 아파트 관리/경비실 정보 조회
function useComplexOffice() {
  const { user } = useAuthContext();
  const [office, setOffice] = useState();

  const get = async () => {
    try {
      const response = await httpClient("/api/v2/nms/complex/office", {
        method: "get",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.errorCode) {
        setOffice(response.data);
      }
    } catch (e) {
      console.error(e?.code);
    }
  };

  const update = async (data) => {
    try {
      const response = await httpClient("/api/v2/nms/complex/office", {
        method: "patch",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        data: data,
      });

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

// 관리자용 전체 단지 목록 조회
function useComplexSetting() {
  const { user } = useAuthContext();
  const [complexList, setComplexList] = useState();

  const get = async () => {
    try {
      const response = await httpClient("/api/v2/nms/complex/complex_list", {
        method: "get",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.errorCode) {
        setComplexList(response.data);
      }
    } catch (e) {
      console.error(e?.code);
    }
  };

  const update = async (data) => {
    try {
      const response = await httpClient("/api/v2/nms/complex/complex_list", {
        method: "patch",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        data: data,
      });

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

export {
  useComplexInfo,
  useComplexApt,
  useComplexAptGroup,
  useComplexOffice,
  useComplexSetting,
};
