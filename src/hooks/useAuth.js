import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStroage";
import { httpClient } from "../apis/httpClient";

function useAuth() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [storedUser, setStoredUser] = useLocalStorage("cvnt_current_user");
  const [user, setUser] = useState(storedUser);

  // set user
  useEffect(() => {
    if (!isInitialized && storedUser) {
      loginByToken(storedUser.id, storedUser.token);
      setIsInitialized(true);
    }

    setUser(storedUser);
  }, [storedUser]);

  // set localstorage
  useEffect(() => {
    setStoredUser(user);
  }, [user]);

  const loginByToken = async (userId, token, complexId) => {
    try {
      const response = await httpClient("/api/v2/auth/nms/token_login", {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      const result = response.data;

      if (!result.errorCode) {
        let user = {
          id: userId,
          token: result.token || "test_token",
          role: result.role || "",
        };

        setUser(user);
      } else {
        throw new Error(result.errorCode);
      }
    } catch (e) {
      console.error(e);
      setUser(null);
    }
  };

  const login = async (userId, password) => {
    try {
      const response = await httpClient("/api/v2/nms/account/login", {
        method: "post",
        data: {
          userId,
          password,
        },
      });

      const result = response.data;

      if (!result.errorCode) {
        let user = {
          id: userId,
          token: result.token || "test_token",
          role: result.role || "",
        };

        setUser(user);
      } else {
        throw new Error(result.errorCode);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
}

export { useAuth };
