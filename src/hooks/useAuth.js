import { useEffect, useState } from "react";
import axios from "axios";

import { useLocalStorage } from "./useLocalStroage";

function useAuth() {
  const [storedUser, setStoredUser] = useLocalStorage("cvnt_current_user");
  const [user, setUser] = useState(storedUser);
  console.log('user : ', user);

  const login = async (userId, password) => {
    const response = await axios.post("/api/v2/nms/account/login", {
      userId,
      password,
    });

    const result = response.data;

    if (!result.error) {
      let data = {
        id: userId,
        token: result.data,
      }

      setUser(data);
      setStoredUser(data);

      return data;
    } else {
      throw new Error("login failed");
    }
  };

  const logout = () => {
    setUser(null);
    setStoredUser(null);
  };

  useEffect(() => {
    if (storedUser) {
      setUser(storedUser);
    } else {
      setUser(storedUser);
    }
  }, [storedUser]);


  return { user, login, logout };
}

export { useAuth };
