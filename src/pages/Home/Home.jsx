import { useEffect, useState } from 'react';
import { getAllProducts } from '../../redux/actions/productsActions';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ProductHome from '../../components/ProductHome/ProductHome';

const Home = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // const getData = async () => {
    //   const data = await getAllProducts();
    //   setProducts(data);
    //   console.log('data: ', data);
    // };
    // getData();
    dispatch(getAllProducts());
  }, []);
  const products = useSelector((state) => state?.productsState?.products);

  return (
    <Container>
      <div className="d-flex flex-wrap">
        {products?.map((product, index) => (
          <ProductHome
            className="card-product"
            product={product}
            key={`${product?.title}-${index}`}
            type={'Product'}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
