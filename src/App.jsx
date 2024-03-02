import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import React from 'react';

const Home = React.lazy(() => import('./pages/Home'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Users = React.lazy(() => import('./pages/Users'));
const User = React.lazy(() => import('./pages/User'));
const Newuser = React.lazy(() => import('./pages/Newuser'));
const Products = React.lazy(() => import('./pages/Products'));
const Product = React.lazy(() => import('./pages/Product'));
const Createproduct = React.lazy(() => import('./pages/Createproduct'));
const Sales = React.lazy(() => import('./pages/Sales'));
import ErrorPage from './pages/ErrorPage';
import productLoader from './loaders/productLoader';
import productsLoader from './loaders/productsLaoder';
import LoadingSpinner from './components/Loading';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <React.Suspense fallback={<LoadingSpinner />}>
          <Dashboard />
        </React.Suspense>
      }
    >
      <Route
        index
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="users"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Users />
          </React.Suspense>
        }
      />
      <Route
        path="user/:userId"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <User />
          </React.Suspense>
        }
      />
      <Route
        path="newUser"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Newuser />
          </React.Suspense>
        }
      />
      <Route
        path="products"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Products />
          </React.Suspense>
        }
        loader={productsLoader}
      />
      <Route
        path="product/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Product />
          </React.Suspense>
        }
        loader={productLoader}
      />
      <Route
        path="newProduct"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Createproduct />
          </React.Suspense>
        }
      />
      <Route path="sales" element={<Sales />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
