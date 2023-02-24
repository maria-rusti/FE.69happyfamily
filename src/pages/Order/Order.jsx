import { useEffect, useState } from 'react';
import { getAllProducts } from '../../redux/actions/productsActions';
import { Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ProductOrder from '../../components/ProductOder/ProductOrder';
import { Link, Navigate } from 'react-router-dom';
import { getOrderProducts, orderProducts } from '../../redux/actions/orderActions';
import ProductOrderHistory from '../../components/ProductOrderHistory/ProductOrderHistory';

const Order = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state?.cartState?.cartProducts);
  const userName = useSelector((state) => state?.userState?.userName);
  const orders = useSelector((state) => state?.orderState?.orderedProducts);
  const [history, setHistory] = useState(false);

  console.log('order: ', orders);
  useEffect(() => {
    dispatch(getOrderProducts());
  }, []);

  if (cartProducts.length === 0) {
    return <Navigate to={'/'} replace />;
  }

  const handleOrder = (event, products, userName) => {
    event.preventDefault();
    dispatch(orderProducts(products, userName));
  };

  return (
    <Container>
      {!history ? (
        <>
          <div className="d-flex flex-wrap">
            {cartProducts.map((product, index) => {
              return (
                <div key={`${index}statae`}>
                  <ProductOrder product={product} key={`${index}`} />
                </div>
              );
            })}
          </div>
          <Button onClick={(event) => handleOrder(event, cartProducts, userName)}>
            Order Products!
          </Button>
          <Button onClick={() => setHistory(true)}>History!</Button>
        </>
      ) : (
        <>
          <div className="d-flex flex-wrap">
            {orders.map((order, index) => {
              return (
                <div key={`${index}statae`}>
                  <ProductOrderHistory order={order} key={`${index}`} index={index} />
                </div>
              );
            })}
          </div>
          <Button onClick={() => setHistory(false)}>See current order!</Button>
        </>
      )}
    </Container>
  );
};

export default Order;
