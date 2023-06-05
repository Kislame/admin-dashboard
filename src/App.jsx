import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import React from 'react';

const Layout = React.lazy(() => import('./pages/Layout'));
const Home = React.lazy(() => import('./pages/Home'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Users = React.lazy(() => import('./pages/Users'));
const User = React.lazy(() => import('./pages/User'));
const Newuser = React.lazy(() => import('./pages/Newuser'));
const Products = React.lazy(() => import('./pages/Products'));
const Product = React.lazy(() => import('./pages/Product'));
const Createproduct = React.lazy(() => import('./pages/Createproduct'));
import ErrorPage from './pages/ErrorPage';
import productLoader from './loaders/productLoader';
import productsLoader from './loaders/productsLaoder';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <React.Suspense fallback={<div>Loading</div>}>
          <Layout />
        </React.Suspense>
      }
    >
      <Route
        path="dashboard"
        element={
          <React.Suspense fallback={<div>Loading</div>}>
            <Dashboard />
          </React.Suspense>
        }
      >
        <Route
          index
          element={
            <React.Suspense fallback={<div>Loading</div>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="users"
          element={
            <React.Suspense fallback={<div>Loading</div>}>
              <Users />
            </React.Suspense>
          }
        />
        <Route
          path="user/:userId"
          element={
            <React.Suspense fallback={<div>Loading</div>}>
              <User />
            </React.Suspense>
          }
        />
        <Route
          path="newUser"
          element={
            <React.Suspense fallback={<div>Loading</div>}>
              <Newuser />
            </React.Suspense>
          }
        />
        <Route
          path="products"
          element={
            <React.Suspense fallback={<div>Loading</div>}>
              <Products />
            </React.Suspense>
          }
          loader={productsLoader}
        />
        <Route
          path="product/:id"
          element={
            <React.Suspense fallback={<div>Loading</div>}>
              <Product />
            </React.Suspense>
          }
          loader={productLoader}
        />
        <Route
          path="newProduct"
          element={
            <React.Suspense fallback={<div>Loading</div>}>
              <Createproduct />
            </React.Suspense>
          }
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
