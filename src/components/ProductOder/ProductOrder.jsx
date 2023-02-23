import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { addProduct, removeProduct, updatedProduct } from '../../redux/actions/cartActions';

export default function ProductOrder({ product, type }) {

  const [index, setIndex] = React.useState(0);
  const quantity = useSelector((state) => state?.cartState?.cartProducts[index]?.quantity);
  const cartProducts = useSelector((state) => state?.cartState?.cartProducts);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleIncrease = (event, product) => {
    event.preventDefault();
    dispatch(addProduct(product));
  };

  const handleDecrease = (event, product) => {
    event.preventDefault();
    dispatch(updatedProduct(product));
  };

  const stergere = (event) =>
    quantity > 1 ? handleDecrease(event, product) : dispatch(removeProduct(product));

  React.useEffect(() => {
    cartProducts?.filter((item, idx) => {
      if (item?._id === product._id) {
        setIndex(idx);
      }
    });
  }, []);

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: 600, width: 900 }}>
      <CardMedia
        component="img"
        sx={{ width: 300, height: 300, display: 'flex', flexDirection: 'column' }}
        image={product?.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {product?.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {product?.description}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {product?.price}
          </Typography>
        </CardContent>
      </Box>
      <Box
        sx={{
          maxWidth: 30,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Button onClick={(event) => handleIncrease(event, product)}>+</Button>
        <Typography>{quantity}</Typography>
        <Button onClick={(event) => stergere(event)}>-</Button>
      </Box>
      <Button size="small" onClick={() => dispatch(removeProduct(product))}>
        Remove from cart
      </Button>
    </Card>
  );
}
