import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import {Link, useParams} from "react-router-dom";
import models from '../../modelData/models.js';

/**
 * Define UserPhotos, a React component of Project 4.
 */
const UserPhotos = () => {
  const { userId } = useParams();

  const userPhotos = models.photoOfUserModel(userId);

  return (
    <div>
      <h2>User Photos</h2>
      {userPhotos.map(photo => (
        <div key={photo._id}>
          <img src={`../../images/${photo.file_name}`} alt={`Photo by ${userId}`} />
          <p>Date: {new Date(photo.date_time).toLocaleString()}</p>
          <h3>Comments:</h3>
          {photo.comments && photo.comments.map(comment => (
            <div key={comment._id}>
              <p>Date: {new Date(comment.date_time).toLocaleString()}</p>
              <p>
                Comment by{' '}
                <Link to={`/users/${comment.user._id}`}>
                  {comment.user.first_name} {comment.user.last_name}
                </Link>
              </p>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default UserPhotos;
