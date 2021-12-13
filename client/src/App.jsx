import React, { useEffect, useState } from "react";
// Redux
import { useSelector } from "react-redux";
// React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserPage from "./pages/UserPage";

const App = () => {
  // const [user, setUser] = useState(null);
  const user = useSelector((state) => state.user.currentUser);

  // useEffect(() => {
  //   currentUser && setUser(currentUser.username);
  //   console.log(user)
  // }, [currentUser]);

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
