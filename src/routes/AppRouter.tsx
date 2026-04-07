import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersListPage from "../pages/UsersListPage";
import SingleUserPage from "../pages/SingleUserPage";
import Home from "../pages/Home.page";

const AppRouter: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-users" element={<UsersListPage />} />
        <Route path="/all-users/:id" element={<SingleUserPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
