import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LogIn from '../pages/LogIn/LogIn';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import Order from '../pages/Order/Order';
import NotFound from '../pages/NotFound/NotFound';

// Here, the Header and the Footer will stay the same on every page.
// We then have the routes, the path prop shows the path of the page,
// and the element is the page itself.

// The Home element is first because it is the main page,
// and the rest are put in alphabetical order.

const Routing = () => {
  const isLoggedIn = useSelector((state) => state?.userState?.isLoggedIn);

  const ProtectedRoute = ({ isLoggedIn, redirectPath = '/login', children }) => {
    if (!isLoggedIn) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };

  return (
    <div className="d-flex justify-between flex-column h-100">
      {isLoggedIn ? <Header /> : null}
      <Routes>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/order"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Order />
            </ProtectedRoute>
          }
        />
      </Routes>
      {isLoggedIn ? <Footer /> : null}
    </div>
  );
};

export default Routing;
