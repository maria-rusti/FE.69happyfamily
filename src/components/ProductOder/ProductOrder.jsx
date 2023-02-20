// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { addProduct, removeProduct } from '../../redux/actions/cartActions';
// import { useDispatch } from 'react-redux';

// export default function ProductOrder({ product, type }) {
//   const dispatch = useDispatch();
//   return (
//     <Card sx={{ display: 'flex', flexDirection: 'column', height: 450, width: 1000}}>
//       <CardMedia component="img" alt="green iguana" height="140" image={product?.image} />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {product?.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {product?.description}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {product?.price}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         {type === 'Cart' ? (
//           <Button size="small" onClick={() => dispatch(removeProduct(product))}>
//             Remove from cart
//           </Button>
//         ) : (
//           <Button size="small" onClick={() => dispatch(addProduct(product))}>
//             Add to cart
//           </Button>
//         )}

//         {/* <Button size="small">View product details</Button> */}
//       </CardActions>
//     </Card>
//   );
// }
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { removeProduct } from '../../redux/actions/cartActions';

export default function ProductOrder({ product, type }) {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: 450, width: 1000 }}>
      <CardMedia
        component="img"
        sx={{ width: 300, height: 300 }}
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
      <Button size="small" onClick={() => dispatch(removeProduct(product))}>
        Remove from cart
      </Button>
    </Card>
  );
}
