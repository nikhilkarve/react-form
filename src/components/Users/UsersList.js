import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} is {user.age} years old and is working as a{' '}
            {user.role}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
