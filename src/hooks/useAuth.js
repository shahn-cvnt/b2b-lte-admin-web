import { useState } from "react";
import axios from "axios";

import { useLocalStorage } from "./useLocalStroage";

function useAuth(initialValue) {
  const [storedUser, setStoredUser] = useLocalStorage("cvnt_current_user");
  const [user, setUser] = useState(initialValue);

  const login = async (userId, password) => {
    const response = await axios.post("/api/v1/account/login", {
      userId,
      password,
    });

    if (response.data && response.data.code === 200) {

      setUser({
        id: userId,
        token: response.data.result,
      });

      setStoredUser(user);

      return user;
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
