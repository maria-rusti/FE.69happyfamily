import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="d-flex h-100 flex-column justify-center align-center">
      <h1>Not Found dute acasa</h1>
      <Link to={'/'}>
        <Button variant="outlined" className="my-3">
          Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
