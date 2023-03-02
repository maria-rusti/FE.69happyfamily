import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Container, Button, MenuList } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './Header.css';
import { useEffect } from 'react';
import { addProduct } from '../../redux/actions/cartActions';
import ProductCard from '../ProductCard/ProductCard';
import { logoutUser } from '../../redux/actions/userActions';
import { calculateTotalPrice } from '../../utils/functions';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const cartProducts = useSelector((state) => state?.cartState?.cartProducts);
  const isLoggedIn = useSelector((state) => state?.userState?.isLoggedIn);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [disabled, setDisabled] = React.useState(true);

  const setareButon = (cartProducts) =>
    cartProducts.length === 0 ? setDisabled(false) : setDisabled(true);

  useEffect(() => {
    dispatch(addProduct(cartProducts));
  }, []);

  const logOutTheUser = () => {
    dispatch(logoutUser());
  };

  const totalPrice = calculateTotalPrice(cartProducts);

  return (
    <Container>
      <Box
        sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        className="header-parent">
        {/* Links to pages */}
        <div className="header-links">
          <Link to={'/'}>
            <Typography sx={{ minWidth: 100 }} component="h2">
              Home
            </Typography>
          </Link>
          <Link to={'/checkout'}>
            <Typography sx={{ minWidth: 100 }} component="h2">
              Checkout
            </Typography>
          </Link>
          <Link to={'/login'}>
            <Button onClick={() => logOutTheUser()} sx={{ textTransform: 'none' }}>
              <Typography sx={{ minWidth: 100 }} component="h2">
                Log out
              </Typography>
            </Button>
          </Link>
        </div>
        {/* Links to pages */}

        <div>
          <Tooltip title="Cart">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}>
              <Avatar sx={{ width: 100, height: 32 }}>Cart</Avatar>
            </IconButton>
          </Tooltip>
        </div>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            },
            maxHeight: 500
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        {cartProducts.length === 0 ? (
          <MenuItem>
            <p>It appears that you don't have anything in the cart</p>
          </MenuItem>
        ) : (
          <MenuList>
            {cartProducts.map((product, index) => {
              return (
                <MenuItem key={`${index}statae`}>
                  <ProductCard product={product} key={`${index}`} type={'Cart'} />
                </MenuItem>
              );
            })}
            <MenuItem>
              <p> {`Total price: ${totalPrice} RON`}</p>
            </MenuItem>
          );
        }
        {cartProducts.length > 0 ? (
          <Link to={'/order'}>
            <Button>Go to checkout!</Button>
          </Link>
        ) : null}
      </Menu>
    </Container>
  );
}

export default Header;
