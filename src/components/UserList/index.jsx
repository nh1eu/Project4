import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from 'react-router-dom';
import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserList, a React component of Project 4.
 */
const UserList = () => {
  const userList = models.userListModel();

  return (
    <div>
      <h2>User List</h2>
      <List component="nav">
        {userList.map((user, index) => (
          <div key={user._id}>
            <ListItem  component={Link}  to={`/users/${user._id}`}>
              <ListItemText primary={`${user.first_name} ${user.last_name}`} />
            </ListItem>
            {index !== userList.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </div>
  );
};


export default UserList;
