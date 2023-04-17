import React, { useState } from "react";
import {
  RouterProvider
} from "react-router-dom";
import { AuthProvider } from "./hooks/useAuthContext";
import { useAuth } from "./hooks/useAuth";
import { router } from "./router";

export default function App() {
  return (
    <AuthProvider value={useAuth()}>
        <RouterProvider router={router} />
    </AuthProvider>
  );
}
