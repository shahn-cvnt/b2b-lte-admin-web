import { useState } from "react";
import axios from "axios";

import { useLocalStorage } from "./useLocalStroage";

function useAuth(initialValue) {
  const [storedUser, setStoredUser] = useLocalStorage("cvnt_current_user");
  const [user, setUser] = useState(initialValue);

  const login = async (userId, password) => {
    const response = await axios.post("/api/v2/nms/account/login", {
      userId,
      password,
    });

    console.log('response : ', response.data);
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

  return { user, login, logout };
}

export { useAuth };
