import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredRole, setEnteredRole] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredRole.trim().length === 0
    ) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge, enteredRole);

    setEnteredUsername('');
    setEnteredAge('');
    setEnteredRole('');
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const roleChangeHandler = (event) => {
    setEnteredRole(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler} className={classes.form}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <label htmlFor="age">Role</label>
        <input
          id="role"
          type="text"
          onChange={roleChangeHandler}
          value={enteredRole}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
