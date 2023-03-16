import { useState } from "react";
import axios from "axios";

import { useLocalStorage } from "./useLocalStroage";

function useAuth(initialValue) {
  const [storedUserId, setStoredUserId] = useLocalStorage("cvnt_current_user_id");
  const [storedToken, setStoredToken] = useLocalStorage("cvnt_current_access_token");
  const [user, setUser] = useState(initialValue);

  const login = async (userId, password) => {
    const response = await axios.post("/api/v1/account/login", {
      userId,
      password,
    });

    if (response.data && response.data.code === 200) {
      setStoredUserId(userId);
      setStoredToken(response.data.result);

      setUser({
        id: userId,
        token: response.data.result,
      });

      return response.data.result;
    } else {
      throw new Error("login failed");
    }
  };

  const logout = () => {
    setUser(null);
    setStoredUserId("");
    setStoredToken("");
  };

  return { user, login, logout };
}

export { useAuth };
