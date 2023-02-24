import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProductOrder from '../ProductOder/ProductOrder';

export default function ProductOrderHistory(order, index) {
  const products = order.order.products;
  console.log(order);

  return (
    <Card sx={{ height: 100, width: 1200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Order Nr. {Number(index) + 1}
        </Typography>
        <Typography variant="h5" component="div">
          Total Price: {order.order.totalPrice}
        </Typography>
        <CardContent>
          {products.map((product, index) => {
            <CardContent key={`${index}statae`}>
              <ProductOrder product={product} key={`${index}`} />
            </CardContent>;
          })}
        </CardContent>
      </CardContent>
    </Card>
  );
}
