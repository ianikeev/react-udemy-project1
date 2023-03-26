import Card from '../UI/Card.jsx';
import styles from './AddUser.module.css';
import Button from '../UI/Button.jsx';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal.jsx';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    // + forces conversion to a number
    if (+enteredAge < 1) {
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <div>
      <ErrorModal title="An error occurred" message="Something went wrong." />
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUsername}
                 onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredAge}
                 onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;