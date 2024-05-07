import './App.css';

import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";

const App = () => {
  return (
    <Router>
      <div>
        <TopBar />
        <div style={{ display: 'flex' }}>
          <UserList />
          <Routes>
            <Route path="/users/:userId" element={<UserDetailWithParams />} />
            <Route path="/photos/:userId" element={<UserPhotos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const UserDetailWithParams = () => {
  const { userId } = useParams();
  return <UserDetail userId={userId} />;
};

const UserPhotosWithParams = () => {
  const { userId } = useParams();
  return <UserPhotos userId={userId} />;
};


export default App;
