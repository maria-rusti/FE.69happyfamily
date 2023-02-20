import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { addProduct, removeProduct } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

export default function ProductHome({ product, type }) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia component="img" alt="green iguana" height="140" image={product?.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product?.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product?.price}
        </Typography>
      </CardContent>
      <CardActions>
        {type === 'Cart' ? (
          <Button size="small" onClick={() => dispatch(removeProduct(product))}>
            Remove from cart
          </Button>
        ) : (
          <Button size="small" onClick={() => dispatch(addProduct(product))}>
            Add to cart
          </Button>
        )}

        <Button size="small">View product details</Button>
      </CardActions>
    </Card>
  );
}
