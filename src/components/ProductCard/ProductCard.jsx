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

export default function MediaControlCard({ product }) {
  
  const cartProducts = useSelector((state) => state?.cartState?.cartProducts);
  const [index, setIndex] = React.useState(0);
  const quantity = useSelector((state) => state?.cartState?.cartProducts[index]?.quantity);
  const theme = useTheme();
  const dispatch = useDispatch();

  const stergere = (event) =>
    quantity > 1 ? handleDecrease(event, product) : dispatch(removeProduct(product));

  const handleIncrease = (event, product) => {
    event.preventDefault();
    dispatch(addProduct(product));
  };

  const handleDecrease = (event, product) => {
    event.preventDefault();
    dispatch(updatedProduct(product));
  };

  React.useEffect(() => {
    cartProducts?.filter((item, idx) => {
      if (item?._id === product._id) {
        setIndex(idx);
      }
    });
  }, []);

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        width: 250
      }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 105 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="p">
            {product?.title.length > 15 ? `${product?.title.slice(0, 10)}...` : product?.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Pret: {product?.price} RON
          </Typography>
        </CardContent>
      </Box>
      <Box
        sx={{
          maxWidth: 50,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Button onClick={(event) => handleIncrease(event, product)}>+</Button>
        <Typography>{quantity}</Typography>
        <Button onClick={(event) => stergere(event)}>-</Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          maxWidth: 90
        }}>
        <CardMedia
          component="img"
          sx={{ width: 50, height: 30 }}
          image={product?.image}
          alt="Live from space album cover"
        />
        <Button
          sx={{ pl: 1, pb: 1, width: 80, height: 30 }}
          size="small"
          onClick={() => dispatch(removeProduct(product))}>
          Delete
        </Button>
      </Box>
    </Card>
  );
}
