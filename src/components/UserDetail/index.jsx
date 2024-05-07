import React from "react";
import {Typography} from "@mui/material";
import models from '../../modelData/models';
import "./styles.css";
import {Link} from "react-router-dom";

/**
 * Define UserDetail, a React component of Project 4.
 */
const UserDetail = ({ userId }) => {
  const user = models.userModel(userId);
  const userPhotos = models.photoOfUserModel(userId);

  return (
    <div>
      <h2>User Detail</h2>
      <p>Name: {user.first_name} {user.last_name}</p>
      <p>Location: {user.location}</p>
      <p>Description: {user.description}</p>
      <p>Occupation: {user.occupation}</p>

      <h3>Photos</h3>
      <div>
        {userPhotos.map(photo => (
          <div key={photo._id}>
            <img src={`../../images/${photo.file_name}`} alt={`Photo by ${user.first_name}`} style={{ width: '150px' }} />
            <p>Date: {new Date(photo.date_time).toLocaleString()}</p>
            <p><Link to={`/photos/${userId}`}>View Photos</Link></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetail;
