import React from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
const TopBar = () => {
  const params = useParams();

  return (
    <div className="topbar">
      <div className="left">Van Dinh Nhieu</div>
      <Routes>
        <Route path="/users/:userId" element={<div className="right">User Detail</div>} />
        <Route path="/photos/:userId" element={<div className="right">Photos of {params.userId}</div>} />
      </Routes>
    </div>
  );
};
export default TopBar;
