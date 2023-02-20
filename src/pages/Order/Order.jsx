import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getAllProducts } from '../../redux/actions/productsActions';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ProductOrder from '../../components/ProductOder/ProductOrder';

const Order = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state?.cartState?.cartProducts);

  useEffect(() => {
    // const getData = async () => {
    //   const data = await getAllProducts();
    //   setProducts(data);
    //   console.log('data: ', data);
    // };
    // getData();
    dispatch(getAllProducts());
  }, []);

  return (
    <Container>
      <div className="d-flex flex-wrap">
        {cartProducts.map((product, index) => {
          return (
            <div key={`${index}statae`}>
              <ProductOrder product={product} key={`${index}`} type={'Cart'} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Order;