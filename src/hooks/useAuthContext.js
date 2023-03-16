import { createContext, useContext } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuthContext }


// 선언 App.js
// <AuthProvider>
//     <Usage />
// </AuthProvider>

// 사용 Usage.js
// const { user, login, logout } = useAuthContext();
