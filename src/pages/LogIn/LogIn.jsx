import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';

export default function LogIn() {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [age, setAge] = React.useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state?.userState?.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={'/'} replace />;
  }

  return (
    <div className="d-flex h-100 flex-column justify-center align-center">
      <TextField
        required
        id="outlined-required"
        label="Username"
        placeholder="username"
        sx={{
          margin: '10px 0'
        }}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        placeholder="password"
        sx={{
          margin: '10px 0'
        }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        value={age}
        id="outlined-age-input"
        label="Age"
        type="number"
        autoComplete="current-age"
        placeholder="age"
        sx={{
          margin: '10px 0'
        }}
        onChange={(e) => setAge(e?.target?.value)}
      />
      <Button
        variant="outlined"
        className="my-3"
        onClick={() => dispatch(loginUser(userName, password,age))}>
        Log in
      </Button>
      <p className="my-3">Don't have an account?</p>
      <Link to={'/register'} className="my-3">
        <Button variant="outlined">Go to register</Button>
      </Link>
    </div>
  );
}
